import jwt from "jsonwebtoken";
import { PrismaClient, User, Team } from "@prisma/client";
import { NextApiRequest } from "next";
import bcrypt from "bcrypt";
import { Request } from "nexus/dist/runtime/schema/schema";
import { sendMail } from "./email";
import { randomBytes, createHash } from "crypto";
import logger from "./logger";

const secret = process.env.SESSION_SECRET;
const expires = process.env.SESSION_EXPIRES;

type ResponseLogin = {
  error?: string;
  token?: string;
  user?: User;
};

export async function login(_root, args, ctx): Promise<ResponseLogin> {
  try {
    const user = await ctx.db.user.findOne({ where: { email: args.email } });
    if (!user) throw Error("ERR_USER_PASSWORD");

    const matches = await bcrypt.compare(args.password, user.password);
    if (!matches) throw Error("ERR_USER_PASSWORD");

    if (!user.emailVerified) {
      throw Error("ERR_EMAIL_NOT_VERIFIED");
    }
    // logger.mail("a user logged in... " + user.email);
    return startJWTSession(user, ctx);
  } catch (err) {
    logger.error(err.message);
    throw err;
  }
}

function startJWTSession(user: User, ctx: NexusContext): ResponseLogin {
  const token: string = jwt.sign({ user }, secret, {
    expiresIn: "1d",
  });

  // @ts-ignore
  // TODO: only if we add req.user we can check it in permissions.ts (e.g. for /me)
  ctx.req.user = user;
  return { token, user };
}

export async function createUser(_root, args, ctx: NexusContext) {
  try {
    const { email, password, name, lastname, role } = args.data;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const user = await ctx.db.user.create({
      data: {
        name,
        lastname,
        email,
        password: hashed,
        role,
      },
    });

    await sendVerificationEmail(email, "verification", ctx.db);
    logger.mail(`New user created: ${name} ${lastname} <${email}>: ${role}`);
    return user;
  } catch (err) {
    if (err.meta?.target && err.meta.target.indexOf("email") >= 0) {
      throw new Error("ERR_DUPLICATE_EMAIL");
    }
    logger.error(err);
    throw new Error("ERR_CREATE_USER");
  }
}

export async function acceptInvite(_root, args, ctx: NexusContext) {
  const team = await ctx.db.team.findOne({ where: { invite: args.invite } });
  if (!team) throw new Error("INVITE_NOT_FOUND");
  // @ts-ignore
  const user = ctx.req.user;
  if (!user) throw new Error("NEEDS_LOGIN");
  const success = connectUserTeam(user, team, ctx);
  if (!success) throw new Error("DB_ERROR");
  else return team;
}

async function connectUserTeam(user: User, team: Team, ctx: NexusContext) {
  if (user.teamId) throw new Error("ALREADY_IN_TEAM");
  return await ctx.db.user.update({
    where: { id: user.id },
    data: { team: { connect: { id: team.id } } },
  });
}

export async function createInvitedUser(_root, args, ctx) {
  args.role = "STUDENT";
  const team = await ctx.db.findOne({ where: { invite: args.invite } });
  if (!team) throw new Error("INVITE_NOT_FOUND");
  args.team = team.id;
  const user = await createUser(_root, args, ctx);
  await connectUserTeam(user, team, ctx);
  return user;
}

export function getSession(req: NextApiRequest): any {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (token && token != "null") return verifyJWT(token);
}

export async function getUser(
  req: Request,
  prisma: PrismaClient
): Promise<User> {
  try {
    // @ts-ignore
    if (req.user) {
      // @ts-ignore
      return await prisma.user.findOne({ where: { email: req.user.email } });
    }
  } catch (err) {
    logger.info("error calling /me", err);
  }
}

export function verifyJWT(token) {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    // logger.info("Error verifying token", err.message, token);
    return null;
  }
}

// purpose: ["verification", "reset", "login"]
export async function sendVerificationEmail(
  email: string,
  purpose: string,
  prisma: PrismaClient
) {
  try {
    const from = process.env.EMAIL;
    const site = `voty${
      process.env.NODE_ENV !== "production" ? process.env.NODE_ENV : ""
    }`;
    const token = await createVerificationToken(prisma, email);
    const url = `${process.env.BASE_URL}user/login?t=${token}&p=${purpose}`;
    const subjects = {
      verification: "voty: Bitte Email bestätigen",
      reset: "voty: Passwort zurücksetzen?",
      login: "voty: Jetzt anmelden?",
    };
    const subject = subjects[purpose];

    const conf = { email: email.replace(/\./g, " ."), url, site };

    await sendMail(from, email, subject, purpose, conf);
    logger.info("SEND SUCCESSFUL", email);
    return { token: "SENT..." };
  } catch (err) {
    logger.error("Error sending verification email", err);
    throw Error("ERR_SEND_EMAIL_VERIFICATION");
  }
}

async function createVerificationToken(prisma: PrismaClient, identifier) {
  const secret = process.env.SESSION_SECRET;
  const maxAge = 24 * 60 * 60 * 1000;
  const expires = new Date(Date.now() + maxAge);
  const token = randomBytes(32).toString("hex");
  const hashed = createHash("sha256").update(`${token}${secret}`).digest("hex");
  await prisma.verificationRequest.create({
    data: {
      identifier,
      token: hashed,
      expires,
    },
  });
  return token;
}

export async function checkVerification(_root, args, ctx) {
  const found = await verifyToken(args.token, ctx.db);
  if (!found) {
    throw Error("ERR_TOKEN_NOT_FOUND");
  }
  const email = found.identifier;
  const user = await ctx.db.user.findOne({ where: { email } });
  if (!user) {
    throw Error("ERR_EMAIL_NOT_FOUND");
  }

  await ctx.db.user.update({
    where: { email },
    data: { emailVerified: new Date() },
  });
  return startJWTSession(user, ctx);
}

export async function changePassword(_root, args, ctx) {
  logger.info("password Change... check user");
  const user = await getUser(ctx.req, ctx.db);
  logger.info("user: ", user);
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(args.password, salt);
  const ok = await ctx.db.user.update({
    where: { id: user.id },
    data: { password: hashed },
  });
  if (ok) {
    return startJWTSession(user, ctx);
  } else {
    throw Error("ERR_PASSWORD_CHANGE");
  }
}

async function verifyToken(token, prisma: PrismaClient) {
  const secret = process.env.SESSION_SECRET;
  const hashed = createHash("sha256").update(`${token}${secret}`).digest("hex");
  const found = await prisma.verificationRequest.findOne({
    where: { token: hashed },
  });
  if (!found) return false;
  if (found.expires.getMilliseconds() > Date.now()) return undefined;
  deleteExpiredTokens(prisma);
  return found;
}

async function deleteExpiredTokens(prisma) {
  const maxAge = 24 * 60 * 60 * 1000;
  const expired = new Date(Date.now() - 2 * maxAge);
  // TODO: deleting old verification requests could be done in cronjob
  await prisma.verificationRequest.deleteMany({
    where: { expires: { lt: expired } },
  });
}
