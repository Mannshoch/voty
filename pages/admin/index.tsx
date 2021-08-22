import { LoggedInPage } from "../../components/Page";
import { Text, Link as A } from "rebass";
import Link from "next/link";
import { ReactElement } from "react";
import { Role } from "graphql/types";

export default function AdminHome(): ReactElement {
  return (
    <LoggedInPage heading="Admin Bereich" role={Role.Admin}>
      <Text lineHeight="2em">
        <Text>
          <Link href="/admin/users" passHref>
            <A>😀 Benutzer</A>
          </Link>
        </Text>
        <Text>
          <Link href="/admin/teachers" passHref>
            <A>🧑🏼‍🤝‍🧑🏻 Lehrpersonen</A>
          </Link>
        </Text>
        <Text>
          <Link href="/admin/teams" passHref>
            <A>🖖 Klassen</A>
          </Link>
        </Text>
        <Text>
          <Link href="/admin/schools" passHref>
            <A>🏫 Schulen</A>
          </Link>
        </Text>
        <Text>
          <Link href="/admin/ballots" passHref>
            <A>🗳 Abstimmungen</A>
          </Link>
        </Text>
        <Text>
          <Link href="/admin/stats" passHref>
            <A>📈 Statistiken</A>
          </Link>
        </Text>
      </Text>
    </LoggedInPage>
  );
}
