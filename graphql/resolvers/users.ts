import jwt from "jsonwebtoken";
import { PrismaClient, User, Team, Role } from "@prisma/client";
import bcrypt from "bcryptjs";
import { sendMail } from "../../util/email";
import { randomBytes, createHash } from "crypto";
import logger from "../../util/logger";
import { FieldResolver } from "nexus/components/schema";
import { promises as fs } from "fs";

let secret = process.env.SESSION_SECRET || "";
if (!secret) throw new Error("New SESSION_SECRET defined in .env");
const expires = process.env.SESSION_EXPIRES || "1d";

if (!secret) {
  logger.warn(".env.SESSION_SECRET is not defined! using random secret");
  secret = randomBytes(32).toString("hex");
}

type ResponseLogin = {
  error?: string;
  token?: string;
  user?: User;
};

export const login: FieldResolver<"Mutation", "login"> = async (
  _root,
  args,
  ctx
): Promise<ResponseLogin> => {
  const user = await ctx.db.user.findOne({ where: { email: args.email } });
  if (!user) {
    logger.info("Login attempt - User not found", { meta: args.email });
    throw Error("Error.UserPassword"); // generic error, do not say why
  }
  if (!user.password) {
    logger.info("Login attempt - Password not set!", { meta: args.email });
    throw Error("Error.PasswordNotSet");
  }

  const matches = await bcrypt.compare(String(args.password), user.password);
  if (!matches) {
    logger.info("Login attempt - Passwords don't match", { meta: args.email });
    throw Error("Error.UserPassword"); // generic error, do not say why
  }

  if (!user.emailVerified) {
    logger.info("Login attempt - Email not verified", args.email);
    throw Error("Error.EmailNotVerified");
  }
  // logger.mail("a user logged in... " + user.email);
  return startJWTSession(user, ctx);
};

function startJWTSession(user: User, ctx: NexusContext): ResponseLogin {
  const token: string = jwt.sign({ user }, secret, {
    expiresIn: expires,
  });

  setRequestUser(user, ctx);
  return { token, user };
}

export function setRequestUser(user: User, ctx: NexusContext): void {
  ctx.user = user;
}

export function getRequestUser(ctx: NexusContext): User | undefined {
  return ctx.user;
}

export const createUser: FieldResolver<"Mutation", "createUser"> = async (
  _root,
  args,
  ctx
) => {
  try {
    const { email, password, name, lastname, role } = args.data;
    if (!email) throw new Error("Error.NoEmail");
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(String(password), salt);
    if (role === Role.Admin) throw new Error("NAH");
    const user = await ctx.db.user.create({
      data: {
        name,
        lastname,
        email,
        password: hashed,
        role: role || undefined,
      },
    });

    await sendVerificationEmail(email, "verification", ctx.db);
    logger.mail(`New user created: ${name} ${lastname} <${email}>: ${role}`);

    // TODO: we need some cleanup here...
    // currently, we need to setRequestUser in order to return to the just created user
    // his own data. This goes through graphql-shield which will then check in the header
    // for a user.
    // However: if a logged-in teacher creates student-users, this same method here will be used
    // and we don't want to change the request header in this case...
    const loggedIn = getRequestUser(ctx);
    if (!loggedIn) {
      setRequestUser(user, ctx);
    }
    return user;
  } catch (err) {
    // eslint-disable-next-line
    if (err.meta?.target && err.meta.target.indexOf("email") >= 0) {
      throw new Error("Error.DuplicateEmail");
    }
    throw new Error("Error.CreateUser");
  }
};

export const acceptInvite: FieldResolver<"Mutation", "acceptInvite"> = async (
  _root,
  args,
  ctx
): Promise<Team> => {
  const team = await ctx.db.team.findOne({ where: { invite: args.invite } });
  if (!team) throw new Error("Error.InviteNotFound");
  const user = getRequestUser(ctx);
  if (!user) throw new Error("Error.NeedsLogin");
  const success = await connectUserTeam(user, team, ctx);
  if (!success) throw new Error("Error.Database");
  else return team;
};

export async function connectUserTeam(
  user: User,
  team: Team,
  ctx: NexusContext
): Promise<User> {
  if (user.teamId) throw new Error("Error.AlreadyInTeam");
  return await ctx.db.user.update({
    where: { id: user.id },
    data: {
      team: { connect: { id: team.id } },
      school: { connect: { id: team.schoolId } },
    },
  });
}

// @ts-ignore: struggling with return type
export const createInvitedUser: FieldResolver<
  "Mutation",
  "createInvitedUser"
> = async (_root, args, ctx, info) => {
  const team = await ctx.db.team.findOne({ where: { invite: args.invite } });
  if (!team) throw new Error("Error.InviteNotFound");
  const { name, lastname, email, password } = args;
  const newArgs = {
    data: {
      name,
      lastname,
      email,
      password,
      role: Role.Student,
    },
  };
  const user = await createUser(_root, newArgs, ctx, info);
  await connectUserTeam(user as User, team, ctx);
  logger.info(`User ${email} created with invite code ${team.name}`);
  return user;
};

export const updateUser: FieldResolver<"Mutation", "updateUser"> = async (
  _root,
  args,
  ctx
) => {
  // TODO: ensure this is not called with variable args by user
  const user = getRequestUser(ctx);
  const id = args.where.id;
  if (id !== user?.id && user?.role !== Role.Admin)
    throw new Error("Error.OnlyUpdateSelf");
  if (args.data.role && user?.role !== Role.Admin) delete args.data.role;
  const result = await ctx.db.user.update({
    where: { id: id || undefined },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore    TODO: this barks on a mismatch in the Gender Enum defined by Nexus and Prisma??!
    data: args.data,
  });
  return result;
};

export const deleteUser: FieldResolver<"Mutation", "deleteUser"> = async (
  _root,
  args,
  ctx
) => {
  const user = getRequestUser(ctx);
  const id = args.where.id;
  const deleteUser = await ctx.db.user.findOne({
    where: { id: String(id) },
    include: { team: true },
  });
  if (!deleteUser) throw new Error("Error.UserNotFound");
  if (deleteUser.team?.teacherId !== user?.id && user?.role !== Role.Admin)
    throw new Error("Error.NoPermission");
  const success = await ctx.db.user.delete({ where: { id: String(id) } });
  if (!success) throw new Error("Error.Database");
  return success;
};
export const setSchool: FieldResolver<"Mutation", "setSchool"> = async (
  _root,
  args,
  ctx,
  info
) => {
  const user = getRequestUser(ctx);
  const updated = await updateUser(
    _root,
    {
      data: { school: { connect: { id: args.school } } },
      where: { id: user?.id },
    },
    ctx,
    info
  );
  return updated;
};

export function getSessionUser(req: Request): User | undefined {
  // what about req.body.token || req.query.token ?
  // const token = req.headers.get("x-access-token");
  // @ts-ignore
  // eslint-disable-next-line
  const token = req.headers["x-access-token"];

  if (token && token != "null") {
    const jwt = verifyJWT(token);
    return jwt?.user;
  }
}

export async function getUser(ctx: NexusContext): Promise<User | null> {
  try {
    const user = getRequestUser(ctx);
    if (user?.id) {
      return await ctx.db.user.findOne({ where: { id: user?.id } });
    }
    return null;
  } catch (err) {
    logger.info("error calling /me", err);
    return null;
  }
}

type JWTSession = {
  user: User;
};

export function verifyJWT(token: string): JWTSession | undefined {
  try {
    const result = jwt.verify(token, secret);
    if (typeof result !== "object") {
      throw new Error("JWT Token was string instead of object");
    }
    if ("user" in result) return result as JWTSession;
    else throw new Error("No user in JWT Session");
  } catch (err) {
    logger.info("Error verifying token: ", err.message);
    return undefined;
  }
}

// purpose: ["verification", "reset", "login"]
export async function sendVerificationEmail(
  email: string,
  purpose: string,
  db: PrismaClient
): Promise<ResponseLogin> {
  try {
    const from = process.env.EMAIL;
    if (!from)
      throw new Error("Please define EMAIL env variable (sender-email)");

    const user = await db.user.findOne({ where: { email } });
    if (!user) {
      logger.info(`Error sending ${purpose} email to: ${email}`);
      return { token: "MAYBE..." };
    }

    const site = `voty${
      process.env.NODE_ENV !== "production" ? process.env.NODE_ENV : ""
    }`;
    const token = await createVerificationToken(db, email);
    const url = `${process.env.BASE_URL}user/login?t=${token}&p=${purpose}`;
    const subjects: Record<string, string> = {
      verification: "voty: Bitte Email bestätigen",
      reset: "voty: Passwort zurücksetzen?",
      login: "voty: Jetzt anmelden?",
    };
    const subject = subjects[purpose];

    const conf = { email: email.replace(/\./g, ".&#8203;"), url, site };

    await sendMail(from, email, subject, purpose, conf);
    logger.info(`Sending ${purpose} email to: ${email} `);

    if (process.env.NODE_ENV !== "production") {
      await fs.writeFile("/tmp/voty-verification-url", url);
    }

    return { token: "MAYBE..." };
  } catch (err) {
    logger.error(`Error sending ${purpose} email`, err);
    throw Error("Error.SendEmailVerification");
  }
}

async function createVerificationToken(
  prisma: PrismaClient,
  identifier: string
) {
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

export const checkVerification: FieldResolver<
  "Mutation",
  "checkVerification"
> = async (_root, args, ctx): Promise<ResponseLogin> => {
  if (!args.token) throw new Error("Error.NoToken");
  const found = await verifyToken(args.token, ctx.db);
  if (!found) {
    throw Error("Error.TokenNotFound");
  }
  const email = found.identifier;
  const user = await ctx.db.user.findOne({ where: { email } });
  if (!user) {
    throw Error("Error.EmailNotFound");
  }

  await ctx.db.user.update({
    where: { email },
    data: { emailVerified: new Date() },
  });
  return startJWTSession(user, ctx);
};

export const changePassword: FieldResolver<
  "Mutation",
  "changePassword"
> = async (_root, args, ctx): Promise<ResponseLogin> => {
  const user = await getUser(ctx);
  if (!user) throw new Error("Error.UserNotFound");
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(String(args.password), salt);
  const ok = await ctx.db.user.update({
    where: { id: user.id },
    data: { password: hashed },
  });
  if (ok) {
    return startJWTSession(user, ctx);
  } else {
    throw Error("Error.PasswordChange");
  }
};

async function verifyToken(token: string, prisma: PrismaClient) {
  const hashed = createHash("sha256").update(`${token}${secret}`).digest("hex");
  const found = await prisma.verificationRequest.findOne({
    where: { token: hashed },
  });
  if (!found) return undefined;
  if (found.expires.getMilliseconds() > Date.now()) return undefined;
  void deleteExpiredTokens(prisma);
  return found;
}

async function deleteExpiredTokens(prisma: PrismaClient) {
  const maxAge = 24 * 60 * 60 * 1000;
  const expired = new Date(Date.now() - 2 * maxAge);
  // TODO: deleting old verification requests could be done in cronjob
  await prisma.verificationRequest.deleteMany({
    where: { expires: { lt: expired } },
  });
}

export const deleteAccount: FieldResolver<"Mutation", "deleteAccount"> = async (
  _root,
  args,
  ctx
) => {
  try {
    const user = await getUser(ctx);
    if (!user) throw new Error("Error.NeedsLogin");

    // delete classes (with BallotRuns) from this teacher
    if (user.role === Role.Teacher) {
      await ctx.db.ballotRun.deleteMany({
        where: { team: { teacherId: user.id } },
      });
      await ctx.db.team.deleteMany({ where: { teacherId: user.id } });
    }

    // delete things the user has contributed
    await ctx.db.voted.deleteMany({ where: { userId: user.id } });
    await ctx.db.attachment.deleteMany({ where: { userId: user.id } });
    await ctx.db.reaction.deleteMany({ where: { userId: user.id } });
    await ctx.db.thread.deleteMany({ where: { userId: user.id } });

    const deleted = await ctx.db.user.delete({ where: { id: user.id } });
    if (!deleted) throw new Error("Error.CannotDeleteAccount");
    return { success: true };
  } catch (err) {
    logger.warn("Error deleting user: ", err);
    throw new Error("Error.CannotDeleteAccount");
  }
};
