import { shield, rule, allow, or } from "nexus-plugin-shield";
import { Role } from "@prisma/client";

// TODO: Completely puzzled why nexus build complains about this import...
// import { BallotScope } from "../components/Ballots";
export enum BallotScope {
  PUBLIC = "PUBLIC",
  NATIONAL = "NATIONAL",
  CANTONAL = "CANTONAL",
  SCHOOL = "SCHOOL",
  TEAM = "TEAM",
}

// rule caching: "no_cache", "contextual" (relies on context, eg. authentication,
// or "strict": relies on parent or args
const isUser = rule({ cache: "contextual" })(
  async (parent, args, ctx: NexusContext, info) => {
    return ctx.user?.id !== undefined;
  }
);

const isTeacher = rule({ cache: "contextual" })(
  async (parent, args, ctx: NexusContext, info) => {
    switch (ctx.user?.role) {
      case Role.TEACHER:
      case Role.PRINCIPAL:
      case Role.ADMIN:
        return true;
      default:
        return false;
    }
  }
);

const isAdmin = rule({ cache: "contextual" })(
  async (parent, args, ctx: NexusContext, info) => {
    return ctx.user?.role === Role.ADMIN;
  }
);

// team members can view team
const isTeamMember = rule({ cache: "strict" })(
  async (parent, args, ctx: NexusContext, info) => {
    const { id, teamId } = ctx.user || {};
    if (!id) return false;
    // check if student is part of team
    if (teamId === parent.id) return true;
    // check if teacher teaches this team
    if (id === parent.teacherId) return true;
    return false;
  }
);

// Teacher may view his students
const teachesTeam = rule({ cache: "strict" })(
  async (parent, args, ctx: NexusContext, info) => {
    const { id, role } = ctx.user || {};
    if (!id || role !== Role.TEACHER) return false;
    if (!parent.role)
      throw new Error("teachesTeam can only be applied to Users");
    const student = parent.id;
    const teacher = id;
    const found = await ctx.db.user.findMany({
      where: { id: { equals: student }, team: { teacher: { id: teacher } } },
    });
    return found.length ? true : false;
  }
);

// check for parent.id, or parent.schoolId, or parent.teacherId...
const isOwn = (field) =>
  rule(`own-${field}`, { cache: "strict" })(
    async (parent, args, ctx: NexusContext, info) => {
      const { id } = ctx.user || {};
      if (!id) return false;
      return parent[field] === id;
    }
  );

// ever
const checkBallot = rule({ cache: "strict" })(
  async (parent, args, ctx: NexusContext, info) => {
    if (ctx.user?.role === Role.ADMIN) return true;
    switch (parent.scope) {
      case BallotScope.PUBLIC:
      case BallotScope.NATIONAL:
      case BallotScope.CANTONAL:
        return true;
      case BallotScope.SCHOOL:
        return parent.schoolId === ctx.user?.schoolId;
      case BallotScope.TEAM:
        // for students:
        if (parent.teamId === ctx.user?.teamId) return true;
        // for teacher:
        const team = await ctx.db.team.findOne({
          where: { id: parent.teamId },
        });
        return team?.teacherId === ctx.user?.id;
    }
  }
);

export const permissions = shield({
  rules: {
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
      updateUser: isAdmin, // this is dangerous! role, verification, team, etc.
      setSchool: isUser,
    },
    User: {
      id: isUser,
      name: isUser,
      shortname: isUser,
      role: isUser,
      image: isUser,
      gender: isUser,
      school: isUser,
      team: isUser,
      teaches: isUser,
      lastname: or(isOwn("id"), teachesTeam, isAdmin),
      email: or(isOwn("id"), teachesTeam, isAdmin),
      ballots: or(isOwn("id"), teachesTeam, isAdmin),
      attachments: or(isOwn("id"), teachesTeam, isAdmin),
      threads: or(isOwn("id"), teachesTeam, isAdmin),
      reactions: or(isOwn("id"), teachesTeam, isAdmin),
    },
    School: {
      id: allow,
      name: allow,
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
      invite: or(isOwn("teacherId"), isAdmin),
      "*": isUser,
    },
    Ballot: checkBallot,
    ResponseLogin: allow,
  },
  options: {
    allowExternalErrors: true,
    debug: true,
    fallbackRule: isAdmin,
  },
});
