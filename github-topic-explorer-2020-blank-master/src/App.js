import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Topics from "./components/Topics";

function App() {
  const [topic, setTopic] = useState("react");
  let topicsQuery = gql`
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
  const { data, loading, error } = useQuery(topicsQuery);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  return (
    <div className="container">
      <h1>
        Topic searched : {data.topic.name}{" "}
        <span className="badge bg-primary rounded-pill">
          {data.topic.stargazerCount}
        </span>
      </h1>
      <h3>Related Topics</h3>
      <Topics topics={data.topic.relatedTopics} updateTopic={setTopic}></Topics>
    </div>
  );
}

export default App;
