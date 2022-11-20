import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { REPOSITORIES_QUERY } from "../../../queries/repositoriesQuery";
import HomePage from "../HomePage";

const repositoriesQueryMockResponse = [
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

describe("home screen", () => {
  it("renders page data", async () => {
    render(
      <MockedProvider mocks={repositoriesQueryMockResponse}>
        <HomePage />
      </MockedProvider>
    );

    expect(await screen.findByText("JavaScript")).toBeInTheDocument();
    expect(await screen.findByText("123")).toBeInTheDocument();
    expect(await screen.findByText("678")).toBeInTheDocument();
  });

  it("renders loading state", async () => {
    render(
      <MockedProvider mocks={repositoriesQueryMockResponse}>
        <HomePage />
      </MockedProvider>
    );

    expect(await screen.findByText("Loading...")).toBeInTheDocument();
  });
});
