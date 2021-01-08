import { LoggedInPage } from "components/Page";
import { Cards, CardListAdmin } from "components/Cards";
import { Input } from "@rebass/forms";
import { Flex, Button, Text, Heading } from "rebass";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { A, Breadcrumb } from "components/Breadcrumb";
import { debounce } from "lodash";
import { Filter } from "components/Swissvotes";
import { useTeam } from "state/user";
import { Role } from "graphql/types";

export default function CardsPage(): React.ReactElement {
  const router = useRouter();
  const team = useTeam();
  const [keywords, setKeywords] = useState("");
  const [type, setType] = useState<string | undefined>();
  const [age, setAge] = useState<string | undefined>();

  if (!team) {
    return (
      <LoggedInPage heading="Detailansicht Klasse" role={Role.Teacher}>
        <Text mb={3}>Klasse wurde nicht gefunden.</Text>
        <Button onClick={() => router.push("/teacher/")}>Meine Klassen</Button>
      </LoggedInPage>
    );
  }
  function resetFilters() {
    setAge(undefined);
    setType(undefined);
    setKeywords("");
  }
  return (
    <LoggedInPage heading="Lerninhalte" role={Role.Teacher}>
      <Breadcrumb>
        <A href="/">Start</A>
        <A href="/teacher/">Meine Klassen</A>
        <A href={`/team/${team.id}/admin`}>{team.name}</A>
        <b>Lerninhalte</b>
      </Breadcrumb>

      <Heading>Folgende Lerninhalte sind ausgewählt</Heading>

      <CardListAdmin teamCards={team.cards} teamId={team.id} />

      <Flex mt={4}>
        <Input
          onChange={debounce((evt) => setKeywords(evt.target.value), 300)}
          placeholder="Suche..."
          flex={1}
        />
        <Button ml={3} flex={0.3} mt={[0, 0, "4px"]} height="50px">
          Suche
        </Button>
      </Flex>
      <Text mb={3} mt={1} fontSize={1}>
        Filtern nach Stufe: &nbsp; &nbsp;
        <Filter set={setAge} v={age} val={"Zyklus-2"} label="Zyklus-2" sep />
        <Filter set={setAge} v={age} val={"Sek-1"} label="Sek-1" sep />
        <Filter set={setAge} v={age} val={"Gym"} label="Gym" sep />
        <Filter set={setAge} v={age} val={"Berufsschule"} label="BS" />
        &nbsp; &nbsp; &nbsp; nach Inhalt: &nbsp; &nbsp;
        <Filter set={setType} v={type} val={"tool"} label="Aufgaben" sep />
        <Filter set={setType} v={type} val={"video"} label="Videos" sep />
        <Filter set={setType} v={type} val={"chaty"} label="Chaty" />
      </Text>

      <Cards
        keywords={keywords}
        type={type}
        age={age}
        teamId={team.id}
        teamCards={team.cards}
        resetFilters={resetFilters}
      />
    </LoggedInPage>
  );
}
