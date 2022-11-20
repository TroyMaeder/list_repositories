import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

const authLink = setContext(() => {
  return {
    headers: {
      Authorization: `bearer ${process.env.REACT_APP_API_KEY}`,
    },
  };
});

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
});

export default client