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
  } = useFlashCardGame(cards);

  return (
    <div className="flex flex-col items-center gap-6 mt-8 px-4 w-full">
      <div className="flex flex-col md:flex-row-reverse w-full max-w-4xl justify-center items-center md:items-start gap-8">
        {!deckEnded && (
          <div className="flex flex-col sm:flex-row md:flex-col gap-4 items-center md:items-start w-full max-w-sm order-1 md:order-none">
            <div className="flex flex-row sm:flex-col md:flex-col gap-4 w-full justify-center">
              <button
                onClick={nextCard}
                className="flex-1 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition"
              >
                Correct
              </button>

              <button
                onClick={nextCard}
                className="flex-1 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition"
              >
                Incorrect
              </button>
            </div>

            <div className="text-gray-700 text-sm text-center md:text-left mt-2">
              {remainingCards} card{remainingCards !== 1 ? "s" : ""} left
            </div>
          </div>
        )}

        <div className="relative flex justify-center w-full max-w-sm sm:max-w-md md:max-w-lg h-[320px] sm:h-[380px] order-2 md:order-none">
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
      </div>

      {deckEnded && (
        <div className="mt-6 text-lg font-semibold text-gray-700 text-center">
          🎉 You finished all cards!
        </div>
      )}
    </div>
  );
}
