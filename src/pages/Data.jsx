import TopicsList from "../components/TopicsList/TopicsList";
import topics from "../data/data";

export default function Data() {
  return <TopicsList topics={topics} title={"Data Topics"} />;
}
