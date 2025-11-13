import TopicsList from "../components/TopicsList/TopicsList";
import topics from "../data/programming";

export default function Programming() {
  return <TopicsList topics={topics} title={"Programming Topics"} />;
}
