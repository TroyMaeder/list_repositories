import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { REPOSITORIES_QUERY } from "../../../queries/repositoriesQuery";
import HomePage from "../HomePage";

const epositoriesQueryMockResponse = [
  {
    request: {
      query: REPOSITORIES_QUERY,
    },
    result: {
      data: {
        viewer: {
          login: "Brendan Eich",
          repositories: {
            nodes: [
              {
                name: "JavaScript",
                stargazerCount: 123,
                forkCount: 678,
              },
            ],
          },
        },
      },
    },
  },
];

it("renders home page", async () => {
  render(
    <MockedProvider mocks={epositoriesQueryMockResponse}>
      <HomePage />
    </MockedProvider>
  );

  expect(await screen.findByText("Loading...")).toBeInTheDocument();
  expect(await screen.findByText("JavaScript")).toBeInTheDocument();
  expect(await screen.findByText("123")).toBeInTheDocument();
  expect(await screen.findByText("678")).toBeInTheDocument();
});
