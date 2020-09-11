import { useUser } from "../../state/user";
import { LoggedInPage } from "../../components/Page";
import { Heading, Button, Text, Card } from "rebass";
import { Teams, CreateTeamForm } from "../admin/teams";
import { LogoutButton } from "../user/logout";
import { useState } from "react";
import { SelectSchool } from "../../components/Schools";

export default function Teacher() {
  const user = useUser();
  const [showForm, setShowForm] = useState(false);

  return (
    <LoggedInPage heading="Startseite für Lehrpersonen">
      <Heading as="h2">Willkommen {user && user.name}</Heading>
      <SelectSchool />
      <Heading as="h3">Deine Klassen auf voty</Heading>
      <Teams where={{ teacher: { id: { equals: user?.id } } }} />
      {showForm ? (
        <CreateTeamForm onCompleted={() => setShowForm(false)} />
      ) : (
        <Button onClick={() => setShowForm(!showForm)}>
          Neue Klasse erfassen
        </Button>
      )}
      <Text />
      <LogoutButton my={4} />
    </LoggedInPage>
  );
}
