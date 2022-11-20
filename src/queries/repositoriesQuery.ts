import { gql } from "@apollo/client";

export const REPOSITORIES_QUERY = gql`
  query repositories { 
    viewer {
      login
      repositories(first: 100) {
        nodes {
          name
          stargazerCount
          forkCount
        }
      }
    }
  }
`;