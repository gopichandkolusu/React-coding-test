import { gql } from "@apollo/client";

export function getTopicsQuery(topic) {
  return gql`
    {
      topic(name: "${topic}") {
        id
        stargazerCount
        relatedTopics {
          id
          name
          stargazerCount
        }
        name
      }
    }
    `;
}
