import TopicsList from "../components/TopicsList/TopicsList";
import topics from "../data/digitalEnvironments";

export default function DigitalEnvironments() {
  return <TopicsList topics={topics} title={"Digital Environments Topics"} />;
}
