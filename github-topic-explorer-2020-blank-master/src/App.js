import { useState } from "react";
import { useQuery } from "@apollo/client";
import Topics from "./components/Topics";
import { getTopicsQuery } from "./gql/topicsQuery";

function App() {
  const [topic, setTopic] = useState("react");
  const TOPICS_QUERY = getTopicsQuery(topic);
  const { data, loading, error } = useQuery(TOPICS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  return (
    <div className="container">
      <h1>
        Topic searched : <span>{data.topic.name}</span>{" "}
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
