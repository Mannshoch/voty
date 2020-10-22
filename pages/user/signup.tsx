import { Page } from "components/Page";
import { Card, Text, Button } from "rebass";
import { gql } from "@apollo/client";
import { useState, ReactElement, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { QForm, yup, ErrorBox } from "../../components/Form";
import { omit } from "lodash";
import { SessionUser } from "state/user";
import { useCreateUserMutation } from "graphql/types";

// TODO use fragment for these fields
export const CREATE_USER = gql`
  mutation createUser($data: UserCreateInput!) {
    createUser(data: $data) {
      id
      name
      email
      shortname
      lastname
      role
    }
  }
`;

export default function Signup(): ReactElement {
  const [user, setUser] = useState<SessionUser | undefined>(undefined);
  if (user) {
    return <Success user={user} />;
  }
  return (
    <Page heading="Erstelle ein neues Benutzer-Konto">
      <Text>
        Erstelle ein neuen Konto für voty.ch. <br />
        Bitte nutze die Email-Adresse Deiner Schule.
      </Text>
      <CreateUserForm setUser={setUser} />
    </Page>
  );
}

export function Success({ user }: { user?: SessionUser }): ReactElement {
  return (
    <Page heading="Konto erstellt">
      <Text>
        Hallo {user?.name} 👋 Dein neues Konto wurde gestellt und wir haben eine
        Email an «{user?.email}» geschickt. Bitte öffne den Link in diesem
        Email, um dich anzumelden.
      </Text>
    </Page>
  );
}

export function CreateUserForm({
  setUser,
  onSubmit,
  omitRole,
  defaultRole = "Teacher",
}: {
  setUser: Dispatch<SetStateAction<SessionUser | undefined>>;
  onSubmit?: (values: Record<string, string | number>) => void;
  omitRole?: boolean;
  defaultRole?: string;
}): ReactElement {
  const router = useRouter();
  const [error, setError] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [doCreateUser] = useCreateUserMutation({
    onCompleted(data) {
      setUser(data.createUser);
    },
    onError(error) {
      if (error.message === "ERR_DUPLICATE_EMAIL") {
        setError("Diese Email ist bereits registriert");
        setShowLogin(true);
      }
    },
  });

  if (!onSubmit) {
    onSubmit = (values) =>
      doCreateUser({ variables: { data: omit(values, "submit") } });
  }
  return (
    <Card>
      <QForm
        mutation={doCreateUser}
        onSubmit={onSubmit}
        fields={{
          name: {
            label: "Vorname:",
            required: true,
            validate: yup.string().min(3, "Dein Vorname ist etwas kurz"),
          },
          lastname: { label: "Nachname:", required: true },
          email: {
            label: "Email:",
            required: true,
            type: "email",
            placeholder: "name@meineschule.ch",
          },
          password: {
            label: "Passwort:",
            type: "password",
            required: true,
            validate: yup
              .string()
              .min(6, "Dein Passwort ist etwas sehr kurz..."),
          },
          // watch out: password2 would also be sent to server which barks
          //password2: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
          role: {
            type: omitRole ? "hidden" : "select",
            label: "Ich bin:",
            init: defaultRole,
            required: true,
            options: {
              "---": "Unkown",
              "Schüler*in": "Student",
              "Lehrer*in": "Teacher",
              "Schulleiter*in": "Principal",
              "Weltenbürger*in": "Unkown",
            },
          },
          submit: { type: "submit", label: "Konto erstellen" },
        }}
      >
        <ErrorBox error={error} my={4} />
        {showLogin && (
          <Button
            onClick={() => router.push("/user/login")}
            variant="outline"
            sx={{ gridColumn: [0, 0, 2] }}
          >
            Möchstest Du Dich anmelden?
          </Button>
        )}
        <Button
          onClick={() => router.push("/user/login")}
          variant="outline"
          sx={{ gridColumn: [0, 0, 2] }}
        >
          Ich habe bereits ein Benutzer-Konto
        </Button>
      </QForm>
    </Card>
  );
}
