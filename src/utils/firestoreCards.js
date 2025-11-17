import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../lib/firebase";

export async function getCardsByOutcomeIds(outcomeIds) {
  const allCards = [];

  for (const outcomeId of outcomeIds) {
    const [areaId, topicPart, outcomePart] = outcomeId.split(".");
    const topicId = `${areaId}.${topicPart}`;

    const cardsRef = collection(
      db,
      "flash_cards",
      areaId,
      "topics",
      topicId,
      "outcomes",
      outcomeId,
      "cards"
    );

    const snapshot = await getDocs(cardsRef);
    snapshot.forEach((doc) => {
      allCards.push(doc.data());
    });
  }

  return allCards;
}
