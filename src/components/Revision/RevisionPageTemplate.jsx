import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function RevisionPageTemplate({ title, sections }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const highlightCode = queryParams.get("outcome");

  const sectionRefs = useRef({});

  const navigate = useNavigate();

  useEffect(() => {
    if (highlightCode && sectionRefs.current[highlightCode]) {
      const el = sectionRefs.current[highlightCode];

      el.scrollIntoView({ behavior: "smooth", block: "center" });

      el.classList.add("ring-4", "ring-yellow-400", "bg-yellow-50");
      setTimeout(() => {
        el.classList.remove("ring-4", "ring-yellow-400", "bg-yellow-50");
      }, 3000);
    }
  }, [highlightCode]);

  return (
    <div className="max-w-4xl mx-auto py-10">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 underline mb-4"
      >
        ← Back
      </button>
      <h1 className="text-4xl font-bold mb-8">{title}</h1>

      {sections.map((section) => (
        <div
          key={section.code}
          ref={(el) => (sectionRefs.current[section.code] = el)}
          className="mb-10 p-6 border rounded-lg shadow-sm bg-white transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold mb-3">
            {section.code} — {section.title}
          </h2>
          <p className="text-lg leading-relaxed mb-4">{section.description}</p>

          {section.link && (
            <a
              href={section.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
            >
              Learn More →
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
