import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContentAreas from "../components/ContentAreas/ContentAreas";
import { getTopicsByAreaName } from "../utils/contentAreas";

export default function FlashCards() {
  const navigate = useNavigate();
  const [selectedArea, setSelectedArea] = useState(null);
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedOutcomes, setSelectedOutcomes] = useState([]);
  const [loadingTopics, setLoadingTopics] = useState(false);

  const handleAreaSelect = async (area) => {
    setSelectedArea(area);
    setSelectedTopic(null);
    setSelectedOutcomes([]);
    setLoadingTopics(true);

    try {
      let t = await getTopicsByAreaName(area);
      t = t || [];

      // Sort topics by their numeric ID (natural sort)
      t.sort((a, b) => {
        const [aMain, aSub] = a.id.split(".").map(Number);
        const [bMain, bSub] = b.id.split(".").map(Number);
        return aMain !== bMain ? aMain - bMain : aSub - bSub;
      });

      setTopics(t);
    } catch (err) {
      console.error("Error fetching topics:", err);
      setTopics([]);
    }

    setLoadingTopics(false);
  };

  const handleTopicSelect = (topicId) => {
    setSelectedTopic(topicId);
  };

  const toggleOutcome = (outcome) => {
    setSelectedOutcomes((prev) =>
      prev.includes(outcome)
        ? prev.filter((o) => o !== outcome)
        : [...prev, outcome]
    );
  };

  useEffect(() => {
    if (selectedTopic) {
      const topic = topics.find((t) => t.id === selectedTopic);
      if (topic) setSelectedOutcomes([...topic.outcomes]);
    } else {
      setSelectedOutcomes([]);
    }
  }, [selectedTopic, topics]);

  const handlePlay = () => {
    const topic = topics.find((t) => t.id === selectedTopic);
    const outcomeIds = topic.outcomes
      .map((_, idx) => `${topic.id}.${idx + 1}`)
      .filter((id, idx) => selectedOutcomes.includes(topic.outcomes[idx]));

    navigate(`/flashcards/play?outcomes=${outcomeIds.join(",")}`);
  };

  return (
    <div>
      <ContentAreas onSelect={handleAreaSelect} mode="select" />

      {loadingTopics && <p className="p-6 text-gray-500">Loading topics...</p>}

      {topics.length > 0 && !loadingTopics && (
        <div className="flex flex-col items-center w-full mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Pick a topic
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center justify-center max-w-4xl mx-auto">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => handleTopicSelect(topic.id)}
                className={`relative w-32 h-32 sm:w-40 aspect-square rounded-xl shadow-md transition-transform duration-200 hover:scale-105 focus:outline-none flex items-center justify-center text-center px-2 font-semibold ${
                  selectedTopic === topic.id
                    ? "bg-yellow-400 text-white shadow-lg"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {`${topic.id} ${topic.title}`}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedTopic && (
        <div className="flex flex-col items-center w-full mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Outcomes (select multiple)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center justify-center max-w-5xl mx-auto">
            {topics
              .find((topic) => topic.id === selectedTopic)
              .outcomes.map((outcome, idx) => {
                const topic = topics.find((t) => t.id === selectedTopic);
                const outcomeId = `${topic.id}.${idx + 1}`;
                const isSelected = selectedOutcomes.includes(outcome); // still comparing objects

                return (
                  <button
                    key={idx}
                    onClick={() => toggleOutcome(outcome)}
                    className={`relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40
  rounded-xl shadow-md transition-transform duration-200 hover:scale-105
  focus:outline-none flex flex-col justify-start text-left p-4 font-medium text-xs leading-tight
  ${
    isSelected
      ? "bg-yellow-400 text-white shadow-lg"
      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
  }`}
                  >
                    <span className="absolute top-2 left-2 text-xs font-bold">
                      {outcomeId}
                    </span>
                    <span className="mt-6 overflow-hidden">
                      {outcome.text.length > 60
                        ? outcome.text.slice(0, 60) + "..."
                        : outcome.text}
                    </span>
                  </button>
                );
              })}
          </div>

          {selectedOutcomes.length > 0 && (
            <button
              onClick={handlePlay}
              className="mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors duration-200"
            >
              Play Flashcards
            </button>
          )}
        </div>
      )}
    </div>
  );
}
