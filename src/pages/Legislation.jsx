import TopicsList from "../components/TopicsList/TopicsList";
import topics from "../data/legislation";

export default function Legislation() {
  return <TopicsList topics={topics} title={"Legislation Topics"} />;
}
