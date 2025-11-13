import { useNavigate } from "react-router-dom";

export default function TopicsList({ topics, title }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/topics/${id}`);
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{title}</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <div
            key={topic.id}
            onClick={() => handleClick(topic.id)}
            className="bg-white rounded-2xl shadow-md p-5 border hover:shadow-lg hover:border-blue-500 transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              {topic.id} {topic.title}
            </h2>
            <p className="text-gray-600 text-sm line-clamp-3">
              {topic.outcomes[0]}
            </p>
            <p className="mt-2 text-sm text-gray-400 italic">
              {topic.outcomes.length} outcomes
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
