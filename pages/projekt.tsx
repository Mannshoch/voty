import { AppPage } from "components/Page";
import { Heading, Button, Flex, Text, Card, Image, Link as A } from "rebass";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Center } from "components/Learning";
import { HideFeature } from "components/HideFeature";

export default function Projekt(): React.ReactElement {
  const router = useRouter();
  return (
    <AppPage heading="voty.ch – Ein Projekt zur Förderung der Demokratie an den Schulen">
      <Card fontSize={2}>
        <Text fontWeight="semi">
          Die Demokratie ist eines der wohl wichtigsten Güter der Schweiz. Aber
          wie ge­lingt es uns, die Ju­gendlichen für die Demo­kratie zu
          begeis­tern?
        </Text>
        <Text mt={4}>
          Wir glauben, dass ein demokratisches Verständnis nur durch
          demokratische Praxis erreicht werden kann. Deshalb möchten wir mit
          voty.ch bereits in der Schule eine Basis für das Demokratieverständnis
          schaffen, dieses mit den Schüler*Innen praktisch anwenden und so die
          Fähigkeiten fördern, welche für eine demokratische Partizipation
          wichtig sind.
        </Text>
        <Heading as="h2">Das Konzept von voty.ch kurz erklärt:</Heading>
        <Text>
          voty.ch ist ein Pilotprojekt für eine Lernplattform zur
          De­mo­kratie­förderung an Schulen in der Schweiz bestehend aus drei
          Modulen:
        </Text>
        <Text mt={4}>
          <strong>Modul «Demokratie verstehen»</strong>&nbsp;
          <Tag>in&nbsp;Entwicklung</Tag>
          <br />
          Ein E-Learning-Modul, das den Lehrer*Innen Lernmaterialien und
          interaktive Elemente zur Verfügung stellt, welche die Schweizerische
          Demokratie einfach und verständlich erklären.
          <Detail>
            <Text my={3}>
              Im ersten Modul stellen wir den Lehrer*Innen
              Unterrichtsmaterialien zum Demokratieprozess in der Schweiz in
              Form von verschiedenen Lernpfaden zur Verfügung. Dies sind zum
              einen von easyvote.ch erarbeitete Unterlagen, aber auch Videos von
              «SRF mySchool» sowie selbst entwickelte, interaktive
              E-Learning-Elemente. Mittels diesen Komponenten möchten wir das
              Thema der Zielgruppe (12 bis 18 Jahre) zusammen mit einfachen
              Beispielen und illustrativen Erklärungen näher bringen.
            </Text>
            <Text>
              Das Modul soll nicht theoretisch bleiben, sondern ist mit den
              beiden anderen Modulen verknüpft. So lernen die Jugendlichen die
              Begriffe in einem konkreten Kontext kennen und erleben den Prozess
              hautnah.
            </Text>
          </Detail>
        </Text>
        <Text mt={4}>
          <strong>
            <A href="/abstimmung" variant="underline">
              Modul «Demokratie testen»
            </A>
          </strong>
          &nbsp;
          <Tag bg={"secondary"}>Live</Tag>
          <br /> Ein Abstimmungsmodul, mit dem aktuelle nationale Urnengänge von
          den Schüler*Innen in der Klasse zuerst diskutiert und danach
          durchgeführt werden können.
          <Detail>
            <Text my={3}>
              Um die Theorie in die Praxis zu übertragen, wollen wir
              Abstimmungen für die Jugendlichen erlebbar machen. Hierzu werden
              die zu den nationalen Vorlagen aufbereiteten Inhalte von
              easyvote.ch im Modul integriert. Diese dienen als Basis für die
              Pro/Kontra-Diskussionen innerhalb der Schulklasse. Anschliessend
              erhalten die Schüler*Innen die Möglichkeit, mittels der
              Abstimmungsfunktion des Moduls selber an diesen Abstimmungen
              teilzunehmen.{" "}
            </Text>
            <Text>
              Die Schülerinnen und Schüler lernen so in diesen Probeläufen den
              politischen Prozess kennen und setzen sich mit der Theorie und der
              Praxis der Demokratie auseinander.
            </Text>
          </Detail>
        </Text>

        <Text mt={4}>
          <strong>Modul «Demokratie erleben»</strong>&nbsp;
          <Tag>in&nbsp;Konzeption</Tag>
          <br />
          Eine Online-Plattform auf der Schüler*Innen eigene Ideen rund um ihre
          Schule einbringen können. Diese werden on- und offline diskutiert,
          ausgearbeitet und geprüft.
          <Detail>
            <Text my={3}>
              Das dritte Modul bringt den demokratischen Entscheidungsprozess in
              die Schule. Schulleitung, Lehrerschaft und Schüler*Innen führen
              gemeinsam einen offenen und kreativen Dialog über schulinterne
              Ideen und Vorschläge. Schüler*innen können in einem mit der
              Schulleitung vereinbarten Rahmen (Vertrag) auf der Platform eigene
              Ideen («Initiativen») formulieren, diese gemeinsam off- und online
              diskutieren, verbessern, final ausarbeiten und dafür Mehrheiten
              finden. Nach der Prüfung durch die Schulleitung (Machbarkeit /
              Vertragskonformität) gelangt der ausgearbeitete Vorschlag zur
              Abstimmung und wird bei einer Annahme realisiert. Dabei werden die
              Schüler*Innen didaktisch begleitet, um den Prozess gemeinsam zu
              reflektieren.
            </Text>
            <Text>
              Das Modul fördert die Kompetenzen Kommunikation, Kollaboration und
              kritisches Denken und soll die Lust und Freude an demokratischer
              Partizipation wecken.
            </Text>
          </Detail>
        </Text>
        <HideFeature id="demo">
          <Center>
            <Button mt={4} onClick={() => router.push("/demo")}>
              Auf demo.voty.ch testen?
            </Button>
          </Center>
        </HideFeature>
        <Heading>Teilnahmevoraussetzungen</Heading>
        <Text>
          Sämtliche Angebote von voty.ch werden Schulen und Lehrpersonen
          kostenlos angeboten und richten sich primär an die Stufen Sek-1,
          Gymnasium und Berufsschule. Die Plattform voty.ch mit den drei Modulen
          kann auf jedem Computer, Tablet oder Smartphone mit Internetzugang
          ohne Installation einer zusätzlichen Software genutzt werden.
        </Text>
        <Heading>Datenschutz</Heading>
        <Text>
          Datenschutz und Sicherheit ist für uns zentral. Wir betreiben ein
          Angebot für Schülerinnen und Schüler und bieten die Möglichkeit der
          politischen Meinungsäusserung auf unserer Plattform. Deshalb setzen
          wir alles daran, dass die bei uns gespeicherten Daten nach aktuellen
          Standards gesichert. Weitere Informationen zum Datenschutz finden Sie{" "}
          <A href="/datenschutz" variant="underline">
            hier
          </A>
          .
        </Text>
        <Heading>Wer steht hinter voty.ch?</Heading>
        <Text>
          voty.ch ist ein Projekt des Vereins «Teachen!» das im Rahmen des
          prototypefund.opendata.ch entwickelt wird.
        </Text>
        <Text fontSize={2}>
          <Flex mx={-2} flexWrap="wrap">
            <Person
              name="Stefan Niederhauser"
              href="https://linkedin.com/in/sniederhauser"
              role="Projektleitung und techn. Umsetzung"
              org="LinkedIn"
              image="/people/sn.jpg"
            >
              Stefan hat 25 Jahre Erfahrung mit IT-Projekten aus Startups und
              Corporates und will diese im Bereich der digitalen Bildung und der
              Demokratie einsetzen als Fullstack-Engineer, Entrepreneur,
              Organisator und Weltverbesserer.
            </Person>
            <Person
              name="Roger Wiezel"
              href="http://atelier-w.ch"
              role="Grafische Gestaltung und User Experience"
              org="atelier-w.ch"
              image="/people/rw.jpg"
            >
              Roger gestaltet schon sein Leben lang und seit über zwanzig Jahren
              auch digital. Dabei interessiert ihn vor allem die Schnittstelle
              zwischen Mensch und Maschine. Wie denkt der Mensch? Wie wird die
              Maschine verständlich? Und wie verwandeln wir Komplexität in
              Schönheit?
            </Person>
            <Person
              name="Urs Wildeisen"
              href="https://phbern.ch"
              role="Pädagogische Begleitung"
              org="PH Bern"
              image="/people/uw.jpg"
            >
              Urs ist ein Meister der Didaktik. Wobei er findet, das Kinder nach
              dem ersten Schuljahr meist bereits genügend Bücher gelesen haben.
              Deshalb setzt er seinen Fokus in der Arbeit mit Kindern und
              PH-Studenten lieber auf Robotik, Programmierung, 3D-Druck oder
              Projektarbeit.
            </Person>
            <Person
              name="Barbara Reichen"
              href="https://barbarareichen.com"
              role="Pädagogische Begleitung"
              org="barbarareichen.com"
              image="/people/br.jpg"
            >
              Barbara ist Künstlerin, Kindergärtnerin und Mutter zweier
              Teenager. Sie weiss, dass wir die Welt schleunigst verändern
              müssen und nimmt das auch in die Hand. Mit Kunst. Mit Kindern. Und
              nun mit Demokratie als Mittel zum Zweck!
            </Person>
          </Flex>
        </Text>
        <Heading>Wir haben Ihr Interesse geweckt?</Heading>
        <Text>
          Sie sind am Projekt interessiert, haben Fragen, Anregungen oder
          möchten als Pilotklasse am Projekt teilnehmen? Wir freuen uns auf Ihre{" "}
          <A href="/kontakt" variant="underline">
            Kontaktaufnahme
          </A>
        </Text>
        <Heading>Kontakt</Heading>
        <Text>Verein «Teachen!», Alpenweg 11, Münsingen, info@teachen.ch</Text>
      </Card>
    </AppPage>
  );
}

const Tag: React.FC<{ bg?: string }> = ({ children, bg }) => (
  <Text
    fontSize={1}
    bg={bg || "#bbb"}
    sx={{ borderRadius: 0, display: "inline" }}
    color="white"
    px={2}
    py={"2px"}
  >
    {children}
  </Text>
);

export const Detail: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <Text sx={{ display: "inline" }}>
      &nbsp;{" "}
      <A onClick={() => setOpen(!open)} variant="underline">
        {open ? "schliessen" : "Im Detail…"}
      </A>
      {open && children}
    </Text>
  );
};

export const Person: React.FC<{
  href: string;
  name: string;
  role: string;
  org: string;
  image: string;
}> = (props) => (
  <Flex
    flexDirection="column"
    m={3}
    justifyContent="flex-start"
    alignItems="center"
    width={["40%", "40%", "20.5%"]}
  >
    <Image
      src={props.image}
      mb={3}
      sx={{
        borderRadius: 100,
        transition: "transform .6s ease-in-out",
        ":hover": {
          transform: "rotate(360deg)",
        },
      }}
    />
    <Text fontSize={1} textAlign="center">
      <Text>
        <strong>{props.name}</strong>
      </Text>
      <Text>
        (
        <A href={props.href} target="_blank" variant="underline">
          {props.org}
        </A>
        )
      </Text>
      <Text>{props.role}</Text>
      <hr />
      <Text textAlign="left" fontSize={"13px"}>
        {props.children}
      </Text>
    </Text>
  </Flex>
);
