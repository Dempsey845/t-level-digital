import { AnimatePresence, motion } from "framer-motion";
import FlashCard from "../FlashCard/FlashCard";
import useFlashCardGame from "../../hooks/FlashCardGame/useFlashCardGame";

export default function FlashCardGame({ cards }) {
  const {
    currentCardIndex,
    deckEnded,
    nextCard,
    visibleCards,
    remainingCards,
    currentOutcome,
  } = useFlashCardGame(cards);

  return (
    <div className="flex flex-col items-center gap-10 mt-10 px-4 w-full">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl justify-center items-center lg:items-start gap-12">
        <div className="relative flex justify-center w-full max-w-sm sm:max-w-md md:max-w-lg h-80 sm:h-[380px] order-2 lg:order-1">
          <AnimatePresence>
            {visibleCards.map((card, idx) => {
              const isTop = idx === 0;
              return (
                <motion.div
                  key={currentCardIndex + idx}
                  initial={{ y: -40, opacity: 0, scale: 0.95 }}
                  animate={{ y: idx * 6, opacity: 1, scale: 1 }}
                  exit={{ y: 40, opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute w-full flex justify-center"
                  style={{ zIndex: visibleCards.length - idx }}
                >
                  <FlashCard
                    question={card.question}
                    answer={card.answer}
                    clickable={isTop && !deckEnded}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {!deckEnded && (
          <div className="flex flex-col items-center lg:items-start gap-6 w-full max-w-xs order-1 lg:order-2 text-center lg:text-left">
            <div className="flex flex-row lg:flex-col gap-4 w-full">
              <button
                onClick={nextCard}
                className="flex-1 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl shadow transition font-semibold"
              >
                Correct
              </button>
              <button
                onClick={nextCard}
                className="flex-1 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow transition font-semibold"
              >
                Incorrect
              </button>
            </div>

            <div
              onClick={() => {
                const split = cards[currentCardIndex].outcome_id.split(".");
                const id = `${split[0]}.${split[1]}`;
                window.open(`/topics/${id}?outcome=${split[2]}`, "_blank");
              }}
              className="bg-white hover:bg-gray-200 cursor-pointer shadow-md rounded-xl p-4 w-full"
            >
              <h3 className="font-semibold text-gray-800 mb-1">
                Outcome ({cards[currentCardIndex].outcome_id})
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {currentOutcome
                  ? currentOutcome.text.length > 70
                    ? currentOutcome.text.slice(0, 70) + "..."
                    : currentOutcome.text
                  : "Loading..."}
              </p>
            </div>

            <p className="text-gray-600 font-semibold">
              <span className="font-bold">{remainingCards}</span> card
              {remainingCards !== 1 ? "s" : ""} left
            </p>
          </div>
        )}
      </div>

      {deckEnded && (
        <div className="mt-6 text-xl font-semibold text-gray-700 text-center">
          🎉 You finished all cards!
        </div>
      )}
    </div>
  );
}
