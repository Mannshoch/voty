import { gql, useQuery } from "@apollo/client";
import { useUser, useSetUser } from "../state/user";
import { Heading, Button, Text, Card } from "rebass";
import { omit } from "lodash";
import { QForm, ErrorBox } from "./Form";
import { useMutation } from "@apollo/client";
import { cantonNames } from "../util/cantons";
import { useState, ReactElement } from "react";
import { School } from "@prisma/client";

const GET_SCHOOLS_WITH_MEMBERS = gql`
  query schoolsWithMembers {
    schools {
      id
      name
      city
      zip
      canton
      members {
        id
        name
        lastname
      }
    }
  }
`;

export const Schools: React.FC = () => {
  const schools = useQuery(GET_SCHOOLS_WITH_MEMBERS);

  if (schools.error) {
    return <h1>Error loading data: {schools.error.message}</h1>;
  }
  if (schools.loading) {
    return <h1>Loading data</h1>;
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>City</th>
            <th>Members</th>
          </tr>
        </thead>

        <tbody>
          {schools.data.schools.map((school: any) => (
            <tr key={school.id}>
              <td>{school.id}</td>
              <td>{school.name}</td>
              <td>{school.city}</td>
              <td>{school.members ? school.members.length : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

// update
export const SET_USER_SCHOOL = gql`
  mutation setSchool($school: Int!) {
    setSchool(school: $school) {
      id
      name
      shortname
      school {
        id
        name
        city
        zip
      }
    }
  }
`;

const GET_SCHOOL_LIST = gql`
  query schools {
    schools {
      id
      name
      city
      zip
      canton
    }
  }
`;

export function useSchoolList(): School[] | null {
  const { data } = useQuery(GET_SCHOOL_LIST);
  return data?.schools;
}

export const SelectSchool: React.FC = () => {
  const user = useUser();
  const setUser = useSetUser();
  const schools = useSchoolList();
  const [create, setCreate] = useState(false);
  const [setUserSchool] = useMutation(SET_USER_SCHOOL, {
    onCompleted({ user }) {
      setUser(user);
    },
  });

  if (!user) return null;

  if (user.school) {
    return (
      <Text>
        <b>Dein Schulhaus</b>: {user.school.name}, {user.school.city}
      </Text>
    );
  }
  if (!schools) {
    return <p>Loading...</p>;
  }

  const options = schools.reduce(
    (o: any, i: School) => {
      const label = `${i.zip} ${i.city} - ${i.name}`;
      o[label] = i.id;
      return o;
    },
    { "-- Bitte wählen --": undefined }
  );
  return (
    <>
      {create ? (
        <CreateSchool
          onCancel={() => setCreate(false)}
          onCompleted={({ createOneSchool }: { createOneSchool: School }) => {
            setCreate(false);
            setUserSchool({
              variables: { school: createOneSchool.id },
            });
          }}
        />
      ) : (
        <Card>
          <Heading mt={0}>
            Bitte wähle Dein Schulhaus aus oder erfasse eines:
          </Heading>
          <QForm
            fields={{
              school: {
                label: "Deine Schule: ",
                required: true,
                options,
              },
              submit: {
                type: "submit",
                label: "Bestätigen",
              },
            }}
            mutation={setUserSchool}
            onSubmit={(values: any) =>
              setUserSchool({ variables: { school: parseInt(values.school) } })
            }
          >
            <span />
            <Button onClick={() => setCreate(true)} variant="outline">
              Neues Schulhaus erfassen
            </Button>
          </QForm>
        </Card>
      )}
    </>
  );
};

const CREATE_SCHOOL = gql`
  mutation createOneSchool($data: SchoolCreateInput!) {
    createOneSchool(data: $data) {
      id
      name
      address
      zip
      city
      canton
    }
  }
`;

export function CreateSchool({
  onCompleted,
  onCancel,
}: {
  onCompleted?: (data: any) => void;
  onCancel?: () => void;
}): ReactElement {
  const [error, setError] = useState("");
  const [createSchool] = useMutation(CREATE_SCHOOL, {
    onCompleted: onCompleted,
    onError: (error) => {
      setError(error.message);
    },
    update: (cache, { data: { createOneSchool } }) => {
      cache.modify({
        fields: {
          schools(existingSchools = []) {
            const newSchoolRef = cache.writeFragment({
              data: createOneSchool,
              fragment: gql`
                fragment NewSchool on School {
                  name
                  address
                  zip
                  city
                  canton
                }
              `,
            });
            return [...existingSchools, newSchoolRef];
          },
        },
      });
    },
  });
  return (
    <Card>
      <Heading mt={0}>Neues Schulhaus erfassen:</Heading>
      <QForm
        fields={{
          name: {
            label: "Schulhaus:",
          },
          address: {
            label: "Adresse:",
          },
          zip: {
            label: "PLZ:",
          },
          city: {
            label: "Ort:",
          },
          canton: {
            label: "Kanton:",
            required: true,
            options: cantonNames,
          },
          submit: {
            type: "submit",
            label: "Bestätigen",
          },
        }}
        mutation={createSchool}
        onSubmit={(values: any) =>
          createSchool({ variables: { data: omit(values, "submit") } })
        }
      >
        <span />
        <Button onClick={onCancel} variant="outline">
          Abbrechen
        </Button>
        <ErrorBox error={error} my={4} />
      </QForm>
    </Card>
  );
}
