import { shield, rule, allow, or } from "graphql-shield";
import { Role } from "@prisma/client";
import { ballots } from "./resolvers";
import { User, Ballot } from "@prisma/client";
import type { Context } from "./context";

// rule caching: "no_cache", "contextual" (relies on context, eg. authentication,
// or "strict": relies on parent or args
const isUser = rule({ cache: "contextual" })((parent, args, ctx: Context) => {
  return ctx.user?.id !== undefined;
});

const isTeacher = rule({ cache: "contextual" })(
  (parent, args, ctx: Context) => {
    switch (ctx.user?.role) {
      case Role.Teacher:
      case Role.Principal:
      case Role.Admin:
        return true;
      default:
        return false;
    }
  }
);

const isAdmin = rule({ cache: "contextual" })((parent, args, ctx: Context) => {
  return ctx.user?.role === Role.Admin;
});

// team members can view team
/*
const isTeamMember = rule({ cache: "strict" })(
  async (parent, args, ctx: Context) => {
    const { id, teamId } = ctx.user || {};
    if (!id) return false;
    // check if student is part of team
    if (teamId === parent.id) return true;
    // check if teacher teaches this team
    if (id === parent.teacherId) return true;
    return false;
  }
);*/

// Teacher may view his students
const teachesTeam = rule({ cache: "strict" })(
  async (parent: User, args, ctx: Context) => {
    const { id, role } = ctx.user || {};
    if (!id || role !== Role.Teacher) return false;
    if (!parent.role)
      throw new Error("teachesTeam can only be applied to Users");
    const student = parent.id;
    const teacher = id;
    if (student === teacher) return true;
    const found = await ctx.db.user.findMany({
      where: { id: { equals: student }, team: { teacher: { id: teacher } } },
    });
    return found.length ? true : false;
  }
);

// check for parent.id, or parent.schoolId, or parent.teacherId...
const isOwn = (field: string) =>
  rule(`own-${field}`, { cache: "strict" })((parent, args, ctx: Context) => {
    if (!ctx.user) return false;
    const { id } = ctx.user;
    if (field in parent) {
      // eslint-disable-next-line
      return parent[field] === id;
    } else return false;
  });

const isOwnId = isOwn("id");
const isOwnTeacherId = isOwn("teacherId");

const updateUserCheck = rule({ cache: "strict" })(
  (parent, args, ctx: Context) => {
    if (ctx.user?.role === Role.Admin) return true;
    if (ctx.user && ctx.user.id === args.where?.id) return true;
    else return false;
  }
);

export const canViewBallot = rule({ cache: "strict" })(
  async (parent: Ballot, args, ctx: Context) => {
    if (ctx.user?.role === Role.Admin) return true;
    return await ballots.viewPermission({
      ballot: parent,
      user: ctx.user,
      db: ctx.db,
    });
  }
);

export const permissions = shield(
  {
    Query: {
      user: or(isAdmin, teachesTeam),
      users: or(isAdmin, isTeacher),
      me: allow,
      school: allow,
      schools: isUser,
      team: allow,
      teams: isUser,
      ballot: allow,
      ballots: allow,
      getBallotRuns: allow,
      getBallotResults: allow,
      getTeamThreads: isUser,
    },
    Mutation: {
      login: allow,
      createUser: allow, // default crud.createOneUser
      createInvitedUser: allow, // create user with invite-code
      emailVerification: allow, // send out email (verification, pw, login)
      checkVerification: allow, // check, wether email code is still valid
      changePassword: isUser, // actual password change
      acceptInvite: isUser, // accept team invite if already logged in
      createOneTeam: or(isTeacher, isAdmin),
      deleteOneTeam: or(teachesTeam, isAdmin),
      createOneSchool: isTeacher,
      deleteOneSchool: isAdmin,
      updateUser: or(updateUserCheck, isAdmin), // this is dangerous! role, verification, team, etc.
      setSchool: isUser,
      vote: isUser,
      voteCode: allow,
      inviteStudents: isTeacher,
      addBallotRun: isTeacher,
      removeBallotRun: isTeacher,
      startBallotRun: isTeacher,
      endBallotRun: isTeacher,
      deleteAccount: isUser,
      deleteUser: or(isAdmin, isTeacher),
      postThread: isUser,
    },
    User: {
      id: isUser,
      name: isUser,
      shortname: isUser,
      role: isUser,
      image: isUser,
      gender: isUser,
      year: isUser,
      school: isUser,
      team: isUser,
      teaches: isUser,
      emailVerified: isUser,
      lastname: or(isOwnId, teachesTeam, isAdmin),
      email: or(isOwnId, teachesTeam, isAdmin),
      ballots: or(isOwnId, teachesTeam, isAdmin),
      attachments: or(isOwnId, teachesTeam, isAdmin),
      threads: or(isOwnId, teachesTeam, isAdmin),
      reactions: or(isOwnId, teachesTeam, isAdmin),
      createdAt: isAdmin,
    },
    School: {
      id: allow,
      name: allow,
      type: allow,
      address: allow,
      city: allow,
      zip: allow,
      canton: allow,
      teams: allow,
      members: isAdmin,
    },
    Team: {
      id: allow,
      name: allow,
      school: allow,
      invite: or(isOwnTeacherId, isAdmin),
      code: or(isOwnTeacherId, isAdmin),
      "*": isUser,
    },
    Thread: allow,
    Ballot: allow, //canViewBallot : if we want to protect class/school Ballots
    BallotRun: allow,
    BallotResults: allow,
    ResponseLogin: allow,
    InviteResponse: allow,
    Response: allow,
    Vote: isUser,
  },
  {
    allowExternalErrors: true,
    debug: true,
    fallbackRule: isAdmin,
  }
);
