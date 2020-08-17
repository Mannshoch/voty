import Head from "next/head";
import Newsletter from "components/Newsletter";
import Page from "components/Page";

export default function Kontakt() {
  function sendMail() {
    const email = "hc.nehcaet@ytov:otliam";
    document.location.href = email.split("").reverse().join("");
  }
  return (
    <Page>
      <Head>
        <title>voty - Kontakt</title>
      </Head>
      <h1>Kontakt</h1>
      <h2>Feedback oder Fragen?</h2>
      <p>Für Feedback, Anregungen und Fragen freuen wir uns auf eure Email:</p>
      <p className="text-center">
        <a onClick={sendMail} role="button" className="button primary">
          Email öffnen
        </a>
      </p>
      <br />

      <div className="card" id="newsletter">
        <header>
          <h2>Möchtet ihr regelmässig über «voty» informiert werden?</h2>
        </header>
        <Newsletter />
      </div>
    </Page>
  );
}
