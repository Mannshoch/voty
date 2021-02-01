import { useUser } from "../../state/user";
import { LoggedInPage } from "../../components/Page";
import { ProfileEdit } from "components/Users";
import { trackEvent } from "util/stats";
import { useRouter } from "next/router";
import { Text } from "rebass";

const ASK_DEMOGRAPHICS = true;

export default function StudentHome(): React.ReactElement {
  const user = useUser();
  const router = useRouter();

  // ask for login if not yet logged in
  if (!user || !user.team) {
    return <LoggedInPage heading="Meine Klasse" />;
  }

  // ask for demographics on first login
  if (ASK_DEMOGRAPHICS && user.year === null) {
    trackEvent({ category: "Student", action: "FirstRun" });
    return (
      <LoggedInPage heading={`Hallo ${user?.name}`}>
        <Text>Willkommen auf voty.ch – schön bis Du da!</Text>
        <Text my={2}>
          Deine Klasse: {user?.team?.name}, {user?.school?.name}
        </Text>
        <Text my={2} mt={4}>
          Bitte ergänze hier noch Deine Angaben:
        </Text>
        <ProfileEdit user={user} editMode={true} />
      </LoggedInPage>
    );
  }

  // otherwise redirect to team startpage
  void router.push(`/team/${user.team.id}/`);
  return <LoggedInPage heading={`Meine Klasse (${user.team.name})`} />;
}
