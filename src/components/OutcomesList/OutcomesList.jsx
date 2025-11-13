export default function OutcomesList({ outcomes, topicId }) {
  if (!outcomes || outcomes.length === 0) {
    return <p className="text-gray-500 italic">No outcomes available.</p>;
  }

  return (
    <ul className="space-y-2 list-inside text-gray-700 leading-relaxed">
      {outcomes.map((outcome, index) => (
        <li
          key={index}
          className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors"
        >
          <span className="font-semibold mr-2">
            {topicId}.{index + 1}
          </span>
          {outcome}
        </li>
      ))}
    </ul>
  );
}
