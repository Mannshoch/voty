import { csrfToken } from "next-auth/client";
import Page from "../../components/Page";

export default function Verify() {
  return (
    <Page>
      <h1>Email verschickt</h1>
      <h2 className="is-center">
        Wir haben Dir einen Login-Link an Deine Email-Adresse geschickt.
      </h2>
      <h1>💌</h1>
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await csrfToken(context),
    },
  };
}
