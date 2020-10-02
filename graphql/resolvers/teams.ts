import { Team, User, PrismaClient } from "@prisma/client";
import { createUser, connectUserTeam } from "./users";
import { Role } from "@prisma/client";
import { randomBytes } from "crypto";
import { upperFirst } from "lodash";

export async function inviteStudents(_root: any, args: any, ctx: NexusContext) {
  const { team: id, emails } = args;
  const user = ctx.user;
  const errors: string[] = [];
  const success: string[] = [];

  let team = await ctx.db.team.findOne({ where: { id } });
  if (!team) throw Error("ERR_TEAM_NOT_FOUND");
  if (!user) throw Error("ERR_NEEDS_LOGIN");
  if (team.teacherId !== user.id) throw Error("ERR_NOT_YOUR_TEAM");

  for (let i = 0; i < emails.length; ++i) {
    const email = emails[i];
    const [name, lastname] = email.substring(0, email.indexOf("@")).split(".");

    const args = {
      data: {
        email,
        name: upperFirst(name),
        lastname: upperFirst(lastname),
        role: Role.Student,
        password: randomBytes(16).toString("hex"),
      },
    };
    try {
      const invited = await createUser(_root, args, ctx);
      await connectUserTeam(invited, team, ctx);
      success.push(email);
    } catch (err) {
      errors.push(email);
    }
  }

  console.log("Successfully invited: ", success);
  console.log("Error with invitations: ", errors);
  team = await ctx.db.team.findOne({
    where: { id },
    include: { members: true, school: true },
  });
  console.log("Returning: ", team);
  return team;
}
