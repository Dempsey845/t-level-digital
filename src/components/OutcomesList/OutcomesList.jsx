import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function OutcomesList({ outcomes, topicId, selectedOutcome }) {
  const navigate = useNavigate();
  const outcomeRefs = useRef({});

  useEffect(() => {
    if (!selectedOutcome) return;

    const refKey = Object.keys(outcomeRefs.current).find(
      (key) => key === selectedOutcome || key.endsWith(`.${selectedOutcome}`)
    );

    if (refKey && outcomeRefs.current[refKey]) {
      const el = outcomeRefs.current[refKey];
      el.scrollIntoView({ behavior: "smooth", block: "center" });

      el.classList.add("ring-4", "ring-yellow-400", "bg-yellow-50");
      const timeout = setTimeout(() => {
        el.classList.remove("ring-4", "ring-yellow-400", "bg-yellow-50");
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [selectedOutcome, outcomes]);

  if (!outcomes || outcomes.length === 0) {
    return <p className="text-gray-500 italic">No outcomes available.</p>;
  }

  return (
    <ul className="space-y-2 list-inside text-gray-700 leading-relaxed">
      {outcomes.map((outcome, index) => {
        const outcomeNumber = (index + 1).toString();
        const outcomeCode = `${topicId}.${outcomeNumber}`;
        const isSelected =
          selectedOutcome === outcomeNumber || selectedOutcome === outcomeCode;

        return (
          <li
            key={outcomeCode}
            ref={(el) => (outcomeRefs.current[outcomeCode] = el)}
            onClick={() =>
              navigate(`/outcomes/${topicId}?outcome=${outcomeCode}`)
            }
            className={`rounded-lg p-3 transition-colors cursor-pointer ${
              isSelected
                ? "bg-yellow-200 border border-yellow-400"
                : "bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <span className="font-semibold mr-2">{outcomeCode}</span>
            {outcome.text}
          </li>
        );
      })}
    </ul>
  );
}
