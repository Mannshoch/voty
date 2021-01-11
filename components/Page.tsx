import { Flex, Box, Heading, Text, Link as A, HeadingProps } from "rebass";
import Head from "next/head";
import { useUser } from "state/user";
import { LoginForm } from "pages/user/login";
import React, { ReactNode } from "react";
import CheckLogin from "./CheckLogin";
import { FlexProps } from "rebass";
import { Role } from "graphql/types";
import { Footer } from "components/Footer";
import { TopBar } from "./TopBar";
import IconClose from "../public/images/icon_close.svg";
import { Spinner } from "theme-ui";
import Info from "./Info";
import { tr } from "util/translate";

export const Page: React.FC<{
  children?: React.ReactNode;
  heading?: string;
  bgImages?: string[];
}> = ({ heading, bgImages, children }) => {
  return (
    <AppPage heading={heading} bgImages={bgImages}>
      {children}
    </AppPage>
  );
};

export const AppPage: React.FC<{
  bgImages?: string[];
  heading?: string;
  light?: boolean;
  onClose?: () => void;
}> = (props) => {
  const bgImages = props.bgImages || [
    "voty_bg_mobile_dark.svg",
    "voty_bg_mobile_dark.svg",
    props.light ? "voty_bg_1.svg" : "voty_bg_1_dark.svg",
  ];
  return (
    <>
      <Background bgImages={bgImages} />
      <TopBar />
      <Container pt={[0, 0, 20, 50]} color="white">
        <Head>
          <title>voty.ch – {props.heading}</title>
        </Head>
        <Box
          as="main"
          px={[3, 3, 4]}
          py="25px"
          sx={{
            borderRadius: [0, 0, 5],
            backgroundColor: "silver",
            position: "relative",
          }}
          minWidth="min(100%, 800px)"
          width="100%"
          maxWidth="800px"
          minHeight="450px"
        >
          {props.heading && (
            <Heading
              mt={0}
              as="h1"
              fontSize={[5, 5, "34px", "50px"]}
              fontWeight="normal"
              sx={{ borderBottom: "2px solid white" }}
            >
              <Flex justifyContent="space-between">
                {props.heading}
                {props.onClose && (
                  <A
                    onClick={props.onClose}
                    sx={{
                      position: "relative",
                      right: 0,
                      display: ["none", "none", "block"],
                    }}
                  >
                    <IconClose alt="schliessen" width="20px" height="20px" />
                  </A>
                )}
              </Flex>
            </Heading>
          )}
          {props.children}
        </Box>
        <Footer color={props.light ? ["white", "white", "black"] : "white"} />
      </Container>
    </>
  );
};

export const LoggedInPage: React.FC<{
  role?: Role;
  children?: ReactNode;
  heading?: string;
  bgImages?: string[];
}> = ({ role, children, heading, bgImages }) => {
  const user = useUser();
  const allowed = role
    ? user?.role === role || user?.role === Role.Admin
    : true;

  if (user && allowed) {
    return <AppPage heading={heading}>{children}</AppPage>;
  } else {
    return (
      <AppPage heading={heading} bgImages={bgImages}>
        <CheckLogin>
          <Text my={4}>
            Diese Seite benötigt eine Anmeldung
            {role && ` als ${getRoleName(role)}`}.
          </Text>
          <LoginForm />
        </CheckLogin>
      </AppPage>
    );
  }
};

function getRoleName(role: Role): string {
  const translations: Record<string, string> = {
    Teacher: "Lehrer*in",
    Student: "Schüler*in",
    Principal: "Schulleiter*in",
  };
  return translations[String(role)] || String(role);
}

export const Container: React.FC<FlexProps> = (props) => {
  return (
    <>
      <Flex mt={70} px={[0, 0, 3, 4]} justifyContent="center" {...props}>
        <Flex
          alignItems="center"
          flexDirection="column"
          flex={1}
          maxWidth={["100%", "100%", "100%", "1160px"]}
        >
          {props.children}
        </Flex>
      </Flex>
    </>
  );
};

export const Loading: React.FC = () => (
  <Spinner color="white" size={20} mr={3} />
);

export const Err: React.FC<{ msg?: string }> = ({ msg, children }) =>
  msg || children ? (
    <Info type="important">
      {msg && tr(msg)}
      {children}
    </Info>
  ) : null;

export const ErrorPage: React.FC = (props) => (
  <Page heading="Fehler">
    <Heading as="h2">Oh je, es ist ein Fehler aufgetreten</Heading>
    <Text>{props.children}</Text>
  </Page>
);

export const LoadingPage: React.FC = (props) => (
  <Page heading="Seite wird geladen...">
    <Text>{props.children}</Text>
  </Page>
);

export const Background: React.FC<{ bgImages: string[]; start?: boolean }> = (
  props
) => {
  const gradient =
    " " || "linear-gradient(180deg, rgb(2,11,20) 0%, rgb(31,47,65))";
  const bgImagesUrl = props.bgImages.map(
    (img) => `url("/images/${img}"), ${gradient}`
  );
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        backgroundImage: bgImagesUrl,
        backgroundAttachment: "absolute",
        backgroundPositionY: 0,
        backgroundSize: "100%",
        backgroundPositionX: "center",
        backgroundColor: "#313131",
      }}
    />
  );
};

export const H2: React.FC<HeadingProps> = (props) => (
  <Heading
    as="h2"
    color="#1C88FF"
    pb={2}
    fontWeight="semi"
    sx={{ borderBottom: "2px solid", borderColor: "#1C88FF" }}
    {...props}
  >
    {props.children}
  </Heading>
);

export const H3: React.FC<HeadingProps> = (props) => (
  <Heading as="h3" color="#1C88FF" pb={2} fontWeight="semi" {...props}>
    {props.children}
  </Heading>
);
