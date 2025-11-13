import TopicsList from "../components/TopicsList/TopicsList";
import topics from "../data/problemSolving";

export default function ProblemSolving() {
  return <TopicsList topics={topics} title={"Problem Solving Topics"} />;
}
