import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import OutcomesList from "../components/OutcomesList/OutcomesList";

import problemSolving from "../data/problemSolving";
import programming from "../data/programming";
import emergingIssues from "../data/emergingIssues";
import legislation from "../data/legislation";
import businessContext from "../data/businessContext";
import dataTopics from "../data/data";
import digitalEnvironments from "../data/digitalEnvironments";
import security from "../data/security";

const AREAS = [
  "problemSolving",
  "programming",
  "emergingIssues",
  "legislation",
  "businessContext",
  "data",
  "digitalEnvironments",
  "security",
];

const AREAS_MAP = {
  problemSolving,
  programming,
  emergingIssues,
  legislation,
  businessContext,
  data: dataTopics,
  digitalEnvironments,
  security,
};

export default function TopicDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTopic = () => {
      try {
        const areaIndex = parseInt(id.split(".")[0], 10) - 1;
        const areaName = AREAS[areaIndex];

        if (!areaName) throw new Error("Invalid topic ID prefix.");

        const topicsData = AREAS_MAP[areaName];

        const found = topicsData.find((t) => t.id === id);
        setTopic(found || null);
      } catch (err) {
        console.error(err);
        setTopic(null);
      } finally {
        setLoading(false);
      }
    };

    loadTopic();
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
