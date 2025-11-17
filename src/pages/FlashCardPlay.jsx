import FlashCardGame from "../components/FlashCardGame/FlashCardGame";
import { useLocation } from "react-router-dom";

const CARDS = [
  { id: 10232, outcome_id: "1.1.1", question: "What is 2 + 2", answer: "4" },
  { id: 10232, outcome_id: "1.1.1", question: "What is 2 + 2", answer: "4" },
  { id: 10232, outcome_id: "1.1.2", question: "What is 2 + 4", answer: "6" },
  { id: 10232, outcome_id: "7.1.2", question: "What is 2 + 6", answer: "8" },
  { id: 10232, outcome_id: "1.1.4", question: "What is 2 + 8", answer: "10" },
  { id: 10232, outcome_id: "1.1.5", question: "What is 2 + 10", answer: "12" },
];

const computationalThinkingCards = [
  {
    id: 1,
    outcome_id: "1.1.1",
    question: "What is computational thinking?",
    answer:
      "A logical approach to problem solving that breaks problems down and creates step-by-step solutions.",
  },
  {
    id: 2,
    outcome_id: "1.1.1",
    question: "What is the purpose of computational thinking?",
    answer:
      "To help design efficient, repeatable, and automatable solutions to complex problems.",
  },

  {
    id: 3,
    outcome_id: "1.1.2",
    question: "When should computational thinking be used?",
    answer:
      "When a problem is too large to solve at once, requires automation, or needs precise logical steps.",
  },
  {
    id: 4,
    outcome_id: "1.1.2",
    question: "Give one example of where computational thinking is used.",
    answer:
      "Software development, simulations, checkout systems, or route planning.",
  },

  {
    id: 5,
    outcome_id: "1.1.3",
    question: "What is one benefit of computational thinking?",
    answer:
      "It makes complex problems easier to handle and reduces human error.",
  },
  {
    id: 6,
    outcome_id: "1.1.3",
    question: "What is one drawback of computational thinking?",
    answer:
      "It can be time-consuming and may oversimplify tasks requiring creativity or emotion.",
  },

  {
    id: 7,
    outcome_id: "1.1.4",
    question: "What are the four components of computational thinking?",
    answer:
      "Decomposition, pattern recognition, abstraction, algorithmic design.",
  },
  {
    id: 8,
    outcome_id: "1.1.4",
    question: "Define algorithmic design.",
    answer: "Developing clear, step-by-step instructions to solve a problem.",
  },

  {
    id: 9,
    outcome_id: "1.1.5",
    question: "What is one benefit of decomposition?",
    answer: "It makes complex tasks more manageable.",
  },
  {
    id: 10,
    outcome_id: "1.1.5",
    question: "What is one drawback of pattern recognition?",
    answer: "Incorrect assumptions about patterns can lead to errors.",
  },
  {
    id: 11,
    outcome_id: "1.1.5",
    question: "What is one drawback of abstraction?",
    answer: "Important information might be left out if simplified too much.",
  },

  {
    id: 12,
    outcome_id: "1.1.6",
    question: "What is the purpose of decomposition?",
    answer:
      "To break large problems into smaller parts that are easier to design, test, and manage.",
  },

  {
    id: 13,
    outcome_id: "1.1.7",
    question: "What is the first step of decomposition?",
    answer: "Identify the main components of the problem.",
  },
  {
    id: 14,
    outcome_id: "1.1.7",
    question:
      "What is the next step after identifying components in decomposition?",
    answer: "Characterise each part including inputs and outputs.",
  },
  {
    id: 15,
    outcome_id: "1.1.7",
    question: "Why is decomposition useful in game development?",
    answer:
      "Different features like movement, scoring, enemies, and menus can be separated and worked on individually.",
  },

  {
    id: 16,
    outcome_id: "1.1.8",
    question: "How does decomposition help in problem solving?",
    answer:
      "Each smaller part can be planned and tested independently, making development more efficient.",
  },

  {
    id: 17,
    outcome_id: "1.1.9",
    question: "Name two methods used to represent decomposition.",
    answer:
      "Block diagrams, flowcharts, information flow diagrams, code structure charts, written descriptions.",
  },
  {
    id: 18,
    outcome_id: "1.1.9",
    question: "Why are visual diagrams useful in decomposition?",
    answer:
      "They help show how the system's parts interact and make communication clearer.",
  },

  {
    id: 19,
    outcome_id: "1.1.10",
    question: "What does a flowchart represent?",
    answer: "The logic and sequence of a process using symbols and arrows.",
  },
  {
    id: 20,
    outcome_id: "1.1.10",
    question: "What does pseudocode describe?",
    answer: "A simplified written outline of steps a program will follow.",
  },

  {
    id: 21,
    outcome_id: "1.1.11",
    question: "What is the purpose of pattern recognition?",
    answer:
      "To identify similarities so that existing solutions and knowledge can be reused.",
  },
  {
    id: 22,
    outcome_id: "1.1.11",
    question: "How does pattern recognition improve development speed?",
    answer:
      "Recognising repeated problems allows reuse of proven code or designs.",
  },

  {
    id: 23,
    outcome_id: "1.1.12",
    question: "How is pattern recognition used in game programming?",
    answer:
      "Developers reuse common features like scoring, collisions, and time limits rather than creating new designs each time.",
  },

  {
    id: 24,
    outcome_id: "1.1.13",
    question: "What is abstraction?",
    answer:
      "Focusing on important details and ignoring unnecessary information to reduce complexity.",
  },

  {
    id: 25,
    outcome_id: "1.1.14",
    question: "What are the tasks of abstraction?",
    answer:
      "Identify needed information, remove irrelevant details, hide internal workings.",
  },
  {
    id: 26,
    outcome_id: "1.1.14",
    question: "Give one real-world example of abstraction.",
    answer:
      "Online maps show roads and destinations but hide cars, trees, and people.",
  },

  {
    id: 27,
    outcome_id: "1.1.15",
    question: "What are key elements abstraction identifies in a system?",
    answer:
      "Inputs, expected outputs, variables, constants, key actions, and repeated processes.",
  },

  {
    id: 28,
    outcome_id: "1.1.16",
    question: "How does abstraction help in robot vacuum design?",
    answer:
      "It only considers information needed to clean (map, position, battery) and ignores irrelevant features like wall colour.",
  },

  {
    id: 29,
    outcome_id: "1.1.17",
    question:
      "How do decomposition, pattern recognition, abstraction, and algorithm design work together?",
    answer:
      "Decomposition breaks the problem apart, patterns compare it to known solutions, abstraction filters key details, and algorithms define the final solution steps.",
  },
  {
    id: 30,
    outcome_id: "1.1.17",
    question: "How does a developer decide which CT component to use?",
    answer:
      "They judge which component is most suitable based on the nature and demands of the specific task.",
  },
];

export default function FlashCardPlay() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const outcomesParam = params.get("outcomes");

  const outcomeIds = outcomesParam ? outcomesParam.split(",") : [];

  console.log(outcomeIds);

  const selectedCards = computationalThinkingCards.filter((card) =>
    outcomeIds.includes(card.outcome_id)
  );

  if (selectedCards.length == 0) {
    return <div>No cards available!</div>;
  }

  return (
    <div className="py-3">
      <FlashCardGame cards={selectedCards} />
    </div>
  );
}
