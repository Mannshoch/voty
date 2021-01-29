import { AppPage } from "components/Page";
import { Heading, Text, Box, Flex, Link, Image, Card } from "rebass";
import { Grid } from "theme-ui";
import { ReactElement, useState } from "react";
import { CreateUserForm } from "pages/user/signup";
import Success from "pages/user/success";
import { Role } from "graphql/types";
import { SessionUser } from "state/user";
import { ReadMore } from "components/ReadMore";
import IconCheckWhite from "../public/images/icon_yes.svg";
import { TDIcon } from "components/Table";
import { CircleBullet } from "components/Misc";
import { FAQ } from "../components/FAQ";

export default function Abstimmung(): ReactElement {
  const [newUser, setNewUser] = useState<SessionUser | undefined>(undefined);
  if (newUser) {
    window.scrollTo(0, 0);
    return <Success user={newUser} />;
  }
  return (
    <AppPage heading="Jugendliche stimmen ab – jetzt Klasse anmelden">
      <Text mt={4} fontSize={[2, 2, 3]}>
        <img
          src="/images/voty_module_2.svg"
          alt="Bundeshaus"
          style={{
            float: "right",
            marginLeft: 20,
            marginRight: 20,
            width: "130px",
            maxWidth: "30%",
          }}
        />
        Im Vergleich zu älteren Generationen gehen junge Menschen (18-30) in der
        Schweiz halb so oft abstimmen. Dabei wäre gerade ihre Meinung wichtig!
        Wir wollen Jugendliche ermutigen und befähigen, ihr Stimmrecht aktiv
        wahrzunehmen – das will geübt sein!
      </Text>
      <Flex
        my={4}
        alignItems="center"
        flexDirection="column"
        fontSize={[2, 2, 3]}
      >
        <Flex my={2} color="white">
          <TDIcon mt={3} mr={3}>
            <IconCheckWhite height="25px" />
          </TDIcon>
          <Text maxWidth="700px">
            Ja, ich unterrichte politische Bildung in meiner Klasse und nehme
            auch Bezug auf aktuelle Themen und Abstimmungen
          </Text>
        </Flex>
        <Flex my={2}>
          <TDIcon mt={3} mr={3}>
            <IconCheckWhite height="25px" />
          </TDIcon>
          <Text maxWidth="700px">
            Ich nehme mir im Februar/März Zeit, um die Vorlagen mit den
            Schüler*innen zu diskutieren (z. B. mit Material von{" "}
            <Link
              href="https://www.easyvote.ch/de/school/"
              rel="noreferrer"
              variant="underline"
            >
              easyvote.ch
            </Link>{" "}
            )
          </Text>
        </Flex>
        <Flex my={2}>
          <TDIcon mt={3} mr={3}>
            <IconCheckWhite height="25px" />
          </TDIcon>
          <Text maxWidth="700px">
            Ich führe die Abstimmung mit meiner Klasse online durch und
            bespreche im Nachgang das Resultat
          </Text>
        </Flex>
      </Flex>

      {!newUser ? (
        <>
          <Heading as="h2" id="form">
            Interessiert? Melde Dich jetzt mit Deiner Klasse an
          </Heading>
          <CreateUserForm
            setUser={setNewUser}
            omitRole
            defaultRole={Role.Teacher}
          ></CreateUserForm>
        </>
      ) : (
        <>
          <Heading as="h2">Die Anmeldung hat geklappt!</Heading>
          <Success user={newUser} />
        </>
      )}

      <Box my={5} />

      <Explainer title="Anleitung Klassenabstimmung">
        <Step n={1}>
          Erstellen Sie ein Konto auf voty.ch und eröffnen sie eine Klasse:
          <Image src="/screens/screen_t1.png" mt={2} />
        </Step>
        <Step n={2}>
          Wählen sie die Abstimmungen für ihre Klasse aus:
          <Image src="/screens/screen_t2.png" mt={2} />
        </Step>
        <Step n={3}>
          Laden sie Schüler*innen per Email oder mit Einladungslink ein:
          <Image src="/screens/screen_t3.png" mt={2} />
        </Step>
      </Explainer>

      <Box mt={3} />
      <Explainer title="Anleitung Schüler*innen">
        <Step n="1">
          SuS erhält Einladungs-Email. Ein Klick auf den Link eröffnet Konto:
          <Image src="/screens/screen_t1.png" mt={2} />
        </Step>
        <Step n="2">
          Auswahl der Abstimmungen:
          <Image src="/screens/screen_s2.png" mt={2} />
        </Step>
        <Step n="3">
          SuS Informieren sich auf voty.ch mit Materialien von easyvote:
          <Image src="/screens/screen_s3.png" mt={2} />
        </Step>
        <Step n="4">
          Anonyme Abstimmung wird durchgeführt:
          <Image src="/screens/screen_s4.png" mt={2} />
        </Step>
      </Explainer>
      <Box mt={3} />

      <ReadMore title="Fragen und Antworten">
        <FAQ />
      </ReadMore>
      <Box my={5} />
    </AppPage>
  );
}

export const Explainer: React.FC<{ title: string }> = ({ title, children }) => (
  <ReadMore title={title}>
    <Card fontSize={[1, 2, 3]} mt={0}>
      {children}
    </Card>
  </ReadMore>
);

export const Step: React.FC<{ n: string | number }> = ({ n, children }) => (
  <Flex mb={4}>
    <CircleBullet value={n} bg="gray" color="#fff" />
    <Box ml={2} pt="3px">
      {children}
    </Box>
  </Flex>
);

export const Stats: React.FC = () => (
  <Box fontSize={2}>
    <Heading mt={0}>Aktueller Stand</Heading>
    <Grid columns={[0, 0, "160px auto"]}>
      <label>Anzahl Klassen:</label>
      <ClassBar classes={12} total={50} />

      <label>Diversität Kantone:</label>
      <CantonsBar cantons="BE, BS, LU, SG, ZH, " diversity={25} />

      <label>Verteilung Typus:</label>
      <TypeBar
        types={{ Berufsschulen: 0.2, "Sekundarstufe I": 0.56, Gymnasien: 0.24 }}
      />
    </Grid>
  </Box>
);

const ClassBar: React.FC<{ classes: number; total: number }> = ({
  classes,
  total,
}) => (
  <Flex height="30px" width="100%">
    <Box
      width={classes / total}
      sx={{
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        textAlign: "center",
        lineHeight: 1.4,
      }}
      bg="danger"
      color="white"
    >
      {classes}
    </Box>
    <Box
      width={(total - classes) / total}
      bg="white"
      color="gray"
      sx={{
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        lineHeight: 1.4,
      }}
    >
      &nbsp; mindestens {total} Klassen
    </Box>
  </Flex>
);

const CantonsBar: React.FC<{
  cantons: string;
  diversity: number;
}> = ({ cantons, diversity }) => (
  <Box
    height="30px"
    color="gray"
    pl={3}
    sx={{
      borderRadius: 20,
      lineHeight: 1.4,
      backgroundImage: `linear-gradient(133deg, rgba(36,185,7,0.5) 0%, rgba(255,255,255,1) ${diversity}%)`,
    }}
  >
    {cantons}
  </Box>
);

const TypeBar: React.FC<{ types: Record<string, number> }> = ({ types }) => (
  <Box
    height="30px"
    pl={3}
    bg="white"
    fontSize={1}
    sx={{
      borderRadius: 20,
    }}
  >
    <Flex>
      {Object.keys(types).map((name, ix) => (
        <Box
          key={name}
          width={`${types[name] * 100}%`}
          color="gray"
          sx={{
            textAlign: "center",
            textOverflow: "ellipsis",
            overflow: "hidden",
            lineHeight: 1.9,
            borderRight: ix < 2 ? "3px solid lightgray" : "",
          }}
        >
          {name}
        </Box>
      ))}
    </Flex>
    <Text my={1}></Text>
  </Box>
);
