import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const cache = new InMemoryCache();
const httpLink = createHttpLink({
  uri: "/api/graphql",
});

// TODO: this should take a properly typed prevContext as 2nd param!
const authLink = setContext((_, { headers = {} }) => {
  headers = authHeaders(headers);
  // eslint-disable-next-line
  return { headers };
});
const link = authLink.concat(httpLink);

export function authHeaders(
  headers: Record<string, any> = {}
): Record<string, any> {
  if (typeof localStorage !== "undefined") {
    const token = localStorage.getItem("@token");
    headers["x-access-token"] = token;
  }
  return headers;
}

const client = new ApolloClient({
  cache,
  link,
});
export default client;
