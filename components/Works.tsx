import { gql, MutationResult } from "@apollo/client";
import {
  useWorksQuery,
  WorkWhereInput,
  UserWhereUniqueInput,
  WorkFieldsFragment,
  User,
  usePostWorkMutation,
  PostWorkMutation,
  Scalars,
} from "graphql/types";
import { AttachmentFields } from "components/Uploader";
import { Flex, Link, Text, FlexProps, Box } from "rebass";
import { useTeam, useUser } from "state/user";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Loading } from "./Page";
import { find, isFunction, omit, remove } from "lodash";
import Plus from "../public/images/icon_plus.svg";
import Minus from "../public/images/icon_minus.svg";

export const WorkFields = gql`
  fragment WorkFields on Work {
    id
    card
    title
    text
    data
    users {
      id
      name
      shortname
    }
    attachments {
      ...AttachmentFields
    }
  }
  ${AttachmentFields}
`;

export const WORKS = gql`
  query works($where: WorkWhereInput) {
    works(where: $where) {
      ...WorkFields
    }
  }
  ${WorkFields}
`;

export type WorkItem = React.FC<{ work: WorkFieldsFragment }>;

export const Works: React.FC<
  FlexProps & {
    where?: WorkWhereInput;
    card?: string;
    items: WorkItem;
    list?: React.FC;
    trigger?: number;
  }
> = ({ where, items, list, trigger, card, ...props }) => {
  where = where ?? {};
  if (card) where.card = { equals: card };
  const worksQuery = useWorksQuery({ variables: { where } });
  const works = worksQuery.data?.works;
  const Comp = items;
  const ListComp = list || Flex;
  const [active, setActive] = useState("");

  useEffect(() => {
    if (trigger) {
      void worksQuery.refetch();
    }
  }, [trigger]);

  if (worksQuery.loading) return <Loading />;
  if (!works) return <Text>Noch keine Beiträge</Text>;

  const flexProps = omit(props, "children", "ref");
  return (
    <ListComp {...flexProps}>
      {works && <Text fontWeight="bold">Arbeiten zum Thema:</Text>}
      {works?.map((work) => {
        return (
          <Box key={work.id} mt={2}>
            <Text
              py={2}
              px={3}
              bg="darkgray"
              sx={{ cursor: "pointer" }}
              onClick={() => setActive(active === work.id ? "" : work.id)}
            >
              {active === work.id ? (
                <Minus
                  height="20px"
                  style={{ marginRight: 10 }}
                  alt="Schliessen"
                />
              ) : (
                <Plus height="20px" style={{ marginRight: 10 }} alt="Öffnen" />
              )}
              Von: {work.users?.map((u) => u.shortname).join(", ")}
            </Text>
            {active === work.id && <Comp work={work} />}
          </Box>
        );
      })}
    </ListComp>
  );
};

type PostWorkHookType = (args: {
  card: string;
  title?: string;
  text?: string;
  data?: Scalars["Json"];
  users?: UserWhereUniqueInput[];
}) => [() => void, MutationResult<PostWorkMutation>, number];

export const usePostWork: PostWorkHookType = (args) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { card, title, text, data, users } = args;
  const user = useUser();
  const team = useTeam();
  const [trigger, setTrigger] = useState(0);
  const [doPostWork, state] = usePostWorkMutation();

  async function doPost() {
    if (!team || !user) return;
    const result = await doPostWork({
      variables: {
        data: {
          team: { connect: { id: team.id } },
          school: { connect: { id: user?.school?.id } },
          users: { connect: users ? users : [{ id: user.id }] },
          title,
          text,
          card,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          data,
        },
      },
    });
    // this can be used to refetch <Works trigger={trigger}/>
    if (setTrigger) setTrigger(trigger + 1);
    return result;
  }

  return [doPost, state, trigger];
};

export const POST_WORK = gql`
  mutation postWork($data: WorkCreateInput!) {
    postWork(data: $data) {
      ...WorkFields
    }
  }
  ${WorkFields}
`;

export const Authors: React.FC<{
  work?: WorkFieldsFragment;
  setUsers: (u: Array<UserWhereUniqueInput>) => void;
}> = ({ work, setUsers }) => {
  type U = Pick<User, "id" | "shortname">;
  const user = useUser();
  const team = useTeam();
  const [search, setSearch] = useState("");
  const [matches, setMatches] = useState<U[]>([]);
  const [authors, setAuthors] = useState<U[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (work && work.users) {
      updateUsers(work.users);
    } else if (user) {
      updateUsers([user]);
    }
  }, [user]);

  if (!user || !team) return null;
  const teamUsers = team?.members;

  function doSearch(evt: ChangeEvent<HTMLInputElement>) {
    const str = evt.target.value;
    setSearch(str);
    if (str.length < 3) {
      setMatches([]);
      return;
    }
    const matches = teamUsers?.filter((u) =>
      u.shortname
        ? u.shortname.toLowerCase().indexOf(str.toLowerCase()) >= 0
        : false
    );
    if (matches?.length === 1) {
      addAuthor(matches[0]);
    } else {
      setMatches(matches || []);
    }
  }

  function onKey(evt: React.KeyboardEvent<HTMLInputElement>) {
    if (evt.key === "Backspace" && search.length === 0)
      if (authors.length > 1) {
        authors.pop();
        updateUsers(authors.slice());
      }
  }

  function updateUsers(users: U[]) {
    setAuthors(users);
    setUsers(
      users.map((user) => {
        return { id: user.id };
      })
    );
  }

  function addAuthor(author: U): boolean {
    if (find(authors, (a) => a.id === author.id)) return false;
    authors.push(author);
    updateUsers(authors.slice());
    setSearch("");
    setMatches([]);
    return true;
  }

  function removeAuthor(author: U) {
    if (author.id === user?.id)
      return alert("Du kannst dich selber nicht entfernen");
    if (find(authors, (a) => a.id === author.id)) {
      remove(authors, author);
      setAuthors(authors.slice());
      setUsers(authors.slice());
    }
  }

  return (
    <>
      <Flex
        flexWrap="wrap"
        bg="white"
        pt={2}
        px={2}
        onClick={() => inputRef.current?.focus()}
      >
        {authors.map((author) => (
          <Pill
            key={author.id}
            deleteLink={author.id !== user?.id && (() => removeAuthor(author))}
          >
            {author.shortname}
          </Pill>
        ))}
        <input
          ref={inputRef}
          onKeyDown={onKey}
          value={search}
          onChange={doSearch}
          style={{ border: "none", outline: "none", fontSize: 24 }}
          width="100px"
          placeholder="Suche nach Vorname…"
        />
        {matches && (
          <Flex my={2} width="100%">
            {matches.map((author) => (
              <Pill key={author.id} bg="gray" onClick={() => addAuthor(author)}>
                {author.shortname}
              </Pill>
            ))}
          </Flex>
        )}
      </Flex>
    </>
  );
};

export const Pill: React.FC<{
  deleteLink?: boolean | (() => void);
  bg?: string;
  color?: string;
  onClick?: () => void;
}> = ({ deleteLink, bg = "secondary", color = "white", children, onClick }) => (
  <Flex
    bg={bg}
    color={color}
    alignItems="center"
    px={3}
    mr={2}
    fontSize={1}
    sx={{ borderRadius: 20, cursor: onClick ? "pointer" : "inherit" }}
    onClick={onClick}
  >
    <Text>{children}</Text>
    {deleteLink && isFunction(deleteLink) && (
      <Link ml={2} onClick={deleteLink}>
        ╳
      </Link>
    )}
  </Flex>
);
