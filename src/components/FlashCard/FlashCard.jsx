import { useFlashCard } from "../../hooks/FlashCard/useFlashCard";

export default function FlashCard({ question, answer }) {
  const { flipped, flip } = useFlashCard();

  return (
    <div
      className="w-[90%] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl aspect-3/2 cursor-pointer perspective-[1000px]"
      onClick={() => flip(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-3d ${
          flipped ? "transform-[rotateY(180deg)]" : ""
        }`}
      >
        <div
          data-testid="front_side"
          className="absolute inset-0 bg-amber-300 rounded-2xl shadow-md flex items-center justify-center text-center text-lg font-semibold backface-hidden"
        >
          {question}
        </div>

        <div
          data-testid="back_side"
          className=" absolute inset-0 bg-amber-400 rounded-2xl shadow-md flex items-center justify-center text-center text-lg font-semibold transform-[rotateY(180deg)] backface-hidden"
        >
          {answer}
        </div>
      </div>
    </div>
  );
}
