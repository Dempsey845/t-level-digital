import { useState, useMemo } from "react";

export default function useFlashCardGame(cards) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [deckEnded, setDeckEnded] = useState(false);

  const nextCard = () => {
    if (currentCardIndex + 1 >= cards.length) {
      setDeckEnded(true);
    } else {
      setCurrentCardIndex((prev) => prev + 1);
    }
  };

  const visibleCards = useMemo(
    () => (deckEnded ? [] : cards.slice(currentCardIndex)),
    [cards, currentCardIndex, deckEnded]
  );

  const remainingCards = cards.length - currentCardIndex;

  return {
    currentCardIndex,
    deckEnded,
    nextCard,
    visibleCards,
    remainingCards,
  };
}
