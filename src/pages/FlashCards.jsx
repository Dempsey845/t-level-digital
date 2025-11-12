import FlashCardGame from "../components/FlashCardGame/FlashCardGame";

const CARDS = [
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What is 2 + 4?", answer: "6" },
  { question: "What is 2 + 6?", answer: "8" },
  { question: "What is 2 + 8?", answer: "10" },
  { question: "What is 2 + 10?", answer: "12" },
  { question: "What is 2 + 12?", answer: "14" },
  { question: "What is 2 + 14?", answer: "16" },
];

export default function FlashCards() {
  return (
    <div>
      <FlashCardGame cards={CARDS} />
    </div>
  );
}
