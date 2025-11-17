import { useLocation } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import FlashCardGame from "../components/FlashCardGame/FlashCardGame";
import { getCardsByOutcomeIds } from "../utils/firestoreCards";

export default function FlashCardPlay() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const outcomesParam = params.get("outcomes");

  // useMemo ensures the array is stable unless outcomesParam changes
  const outcomeIds = useMemo(
    () => (outcomesParam ? outcomesParam.split(",") : []),
    [outcomesParam]
  );

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCards() {
      if (outcomeIds.length === 0) {
        setCards([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const fetchedCards = await getCardsByOutcomeIds(outcomeIds);
        setCards(fetchedCards);
      } catch (err) {
        console.error("Error fetching cards:", err);
        setCards([]);
      }
      setLoading(false);
    }

    fetchCards();
  }, [outcomeIds]);

  if (loading) return <p className="p-6 text-gray-500">Loading cards...</p>;
  if (cards.length === 0)
    return <p className="p-6 text-gray-500">No cards available!</p>;

  return (
    <div className="py-3">
      <FlashCardGame cards={cards} />
    </div>
  );
}
