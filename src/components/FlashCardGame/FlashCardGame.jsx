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
    <div className="flex flex-col items-center gap-4 mt-8">
      <div className="flex w-full justify-center items-start gap-6">
        <div className="relative flex-1 max-w-xl flex justify-center h-[400px]">
          <AnimatePresence>
            {visibleCards.map((card, idx) => {
              const isTop = idx === 0;
              return (
                <motion.div
                  key={currentCardIndex + idx}
                  initial={{ y: -50, opacity: 0, scale: 0.9 }}
                  animate={{ y: idx * 8, opacity: 1, scale: 1 }}
                  exit={{ y: 50, opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
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
          <div className="flex flex-col gap-4 self-start">
            <button
              onClick={nextCard}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition"
            >
              Correct
            </button>

            <button
              onClick={nextCard}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition"
            >
              Incorrect
            </button>

            <div className="text-gray-700 text-sm mt-2">
              {remainingCards} card{remainingCards !== 1 ? "s" : ""} left
            </div>
          </div>
        )}
      </div>

      {deckEnded && (
        <div className="mt-6 text-lg font-semibold text-gray-700">
          🎉 You finished all cards!
        </div>
      )}
    </div>
  );
}
