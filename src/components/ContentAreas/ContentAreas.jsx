import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AREAS = [
  "Problem Solving",
  "Programming",
  "Emerging Issues",
  "Legislation",
  "Business Context",
  "Data",
  "Digital Environments",
  "Security",
];

const AREA_IMAGES = [
  "problem-solving.jpg",
  "programming.jpg",
  "emerging-issues.jpg",
  "legislation.jpg",
  "business.jpg",
  "data.jpg",
  "digital-environments.jpg",
  "security.jpg",
];

function ContentArea({ area, image, isSelected, handleClick }) {
  return (
    <button
      onClick={() => handleClick(area)}
      className="relative w-full h-full rounded-lg overflow-hidden shadow-md transition-transform duration-200 hover:scale-105 focus:outline-none"
      style={{
        backgroundImage: `url(/images/content_areas/${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`absolute inset-0 rounded-lg transition-all duration-300 ${
          isSelected ? "border-4 border-yellow-400" : "border-0"
        } bg-black/40 hover:bg-black/20`}
      ></div>

      <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-center px-2 z-10">
        {area}
      </span>
    </button>
  );
}

/*
  mode="navigate" - navigates to the area details
  mode="select"   - selects an area 
*/
export default function ContentAreas({ mode = "navigate", onSelect }) {
  const navigate = useNavigate();
  const [selectedArea, setSelectedArea] = useState(null);

  const handleClick = (area) => {
    if (mode === "navigate") {
      navigate(`/areas/${area.toLowerCase().replace(/\s+/g, "-")}`);
    } else if (mode === "select") {
      setSelectedArea(area);
      onSelect?.(area);
    }
  };

  return (
    <div className="flex flex-col items-center w-full p-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        {mode == "navigate" ? "Explore an area" : "Pick your area!"}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-5 lg:gap-4 xl:gap-3 place-items-center w-full max-w-3xl mx-auto">
        {AREAS.map((area, index) => (
          <div
            key={area}
            className="flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <ContentArea
              handleClick={handleClick}
              area={area}
              image={AREA_IMAGES[index]}
              isSelected={mode === "select" && selectedArea === area}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
