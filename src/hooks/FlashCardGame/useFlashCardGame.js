import { useState, useEffect, useMemo } from "react";
import { getTopicAndAreaOfCard } from "../../utils/contentAreas";

export default function useFlashCardGame(cards) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [deckEnded, setDeckEnded] = useState(false);
  const [currentOutcome, setCurrentOutcome] = useState(null);
  const [loadingOutcome, setLoadingOutcome] = useState(true);

  // Load outcome for the current card
  useEffect(() => {
    let cancelled = false;

    async function loadOutcome() {
      setLoadingOutcome(true);
      const result = await getTopicAndAreaOfCard(cards[currentCardIndex]);
      if (!cancelled) {
        setCurrentOutcome(result.topic.outcome);
        setLoadingOutcome(false);
      }
    }

    loadOutcome();
    return () => (cancelled = true);
  }, [currentCardIndex, cards]);

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
    currentOutcome,
    loadingOutcome,
  };
}
