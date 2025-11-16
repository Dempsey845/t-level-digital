import FlashCardGame from "../components/FlashCardGame/FlashCardGame";

const CARDS = [
  { id: 10232, outcome_id: "1.1.1", question: "What is 2 + 2", answer: "4" },
  { id: 10232, outcome_id: "1.1.1", question: "What is 2 + 2", answer: "4" },
  { id: 10232, outcome_id: "1.1.2", question: "What is 2 + 4", answer: "6" },
  { id: 10232, outcome_id: "7.1.2", question: "What is 2 + 6", answer: "8" },
  { id: 10232, outcome_id: "1.1.4", question: "What is 2 + 8", answer: "10" },
  { id: 10232, outcome_id: "1.1.5", question: "What is 2 + 10", answer: "12" },
];

export default function FlashCards() {
  return (
    <div>
      <FlashCardGame cards={CARDS} />
    </div>
  );
}
