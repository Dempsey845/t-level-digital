import TopicsList from "../components/TopicsList/TopicsList";
import topics from "../data/businessContext";

export default function BusinessContext() {
  return <TopicsList topics={topics} title={"Business Context Topics"} />;
}
