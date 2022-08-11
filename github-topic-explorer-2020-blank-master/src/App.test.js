import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { getTopicsQuery } from "./gql/topicsQuery";
import App from "./App";

const mocks = []; // We'll fill this in next

test("renders learn react link", async () => {
  const topicsMock = {
    request: {
      query: getTopicsQuery("react"),
    },
    result: {
      data: {
        topic: {
          id: "10",
          stargazerCount: 200,
          relatedTopics: [
            {
              id: "1",
              name: "angular",
              stargazerCount: 100,
            },
            {
              id: "2",
              name: "react-native",
              stargazerCount: 120,
            },
            {
              id: "3",
              name: "vue",
              stargazerCount: 140,
            },
          ],
          name: "react",
        },
      },
    },
  };

  render(
    <MockedProvider mocks={[topicsMock]} addTypename={false}>
      <App />
    </MockedProvider>
  );
  expect(await screen.findByText("Loading...")).toBeInTheDocument();
  expect(await screen.findByText("react")).toBeInTheDocument();
});
