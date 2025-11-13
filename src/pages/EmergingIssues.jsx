import TopicsList from "../components/TopicsList/TopicsList";
import topics from "../data/emergingIssues";

export default function EmergingIssues() {
  return <TopicsList topics={topics} title={"Emerging Issues Topics"} />;
}
