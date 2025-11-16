import { useState, useMemo } from "react";
import { getTopicAndAreaOfCard } from "../../utils/contentAreas";

export default function useFlashCardGame(cards) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [deckEnded, setDeckEnded] = useState(false);
  const [currentOutcome, setCurrentOutcome] = useState(
    getTopicAndAreaOfCard(cards[0]).topic.outcome
  );

  const nextCard = () => {
    if (currentCardIndex + 1 >= cards.length) {
      setDeckEnded(true);
    } else {
      setCurrentCardIndex((prev) => {
        const nextIndex = prev + 1;
        if (cards[nextIndex].outcome_id != cards[prev].outcome_id) {
          const topic = getTopicAndAreaOfCard(cards[nextIndex]).topic;
          setCurrentOutcome(topic.outcome);
          console.log(topic);
        }
        return nextIndex;
      });
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
  };
}
