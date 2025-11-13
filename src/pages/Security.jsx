import TopicsList from "../components/TopicsList/TopicsList";
import topics from "../data/security";

export default function Security() {
  return <TopicsList topics={topics} title={"Security Topics"} />;
}
