export default function OutcomesList({ outcomes, topicId, selectedOutcome }) {
  if (!outcomes || outcomes.length === 0) {
    return <p className="text-gray-500 italic">No outcomes available.</p>;
  }

  return (
    <ul className="space-y-2 list-inside text-gray-700 leading-relaxed">
      {outcomes.map((outcome, index) => {
        const number = (index + 1).toString();
        const isSelected = selectedOutcome === number;

        return (
          <li
            key={index}
            className={
              `rounded-lg p-3 transition-colors cursor-pointer ` +
              (isSelected
                ? "bg-yellow-200 border border-yellow-400"
                : "bg-gray-50 hover:bg-gray-100")
            }
          >
            <span className="font-semibold mr-2">
              {topicId}.{number}
            </span>
            {outcome}
          </li>
        );
      })}
    </ul>
  );
}
