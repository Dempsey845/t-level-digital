import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import OutcomesList from "../components/OutcomesList/OutcomesList";
import { getTopicById } from "../utils/contentAreas";

export default function TopicDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const result = getTopicById(id);
    setTopic(result);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <p className="p-6 text-gray-500">Loading topic...</p>;
  }

  if (!topic) {
    return (
      <div className="p-6">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 underline mb-4"
        >
          ← Back
        </button>
        <p className="text-gray-600">Topic not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 underline mb-4"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {topic.id} {topic.title}
      </h1>

      <OutcomesList outcomes={topic.outcomes} topicId={topic.id} />
    </div>
  );
}
