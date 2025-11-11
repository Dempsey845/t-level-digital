/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import FlashCardGame from "./FlashCardGame";

const EXAMPLE_CARDS = [
  { question: "Q1?", answer: "A1" },
  { question: "Q2?", answer: "A2" },
  { question: "Q3?", answer: "A3" },
];

describe("FlashCardGame", () => {
  it("renders the first card correctly", () => {
    render(<FlashCardGame cards={EXAMPLE_CARDS} />);
    expect(screen.getByText("Q1?")).toBeInTheDocument();
  });

  it("shows the correct initial remaining cards count", () => {
    render(<FlashCardGame cards={EXAMPLE_CARDS} />);
    expect(screen.getByText("3 cards left")).toBeInTheDocument();
  });

  it("moves to the next card when Correct is clicked", () => {
    render(<FlashCardGame cards={EXAMPLE_CARDS} />);
    const correctButton = screen.getByText("Correct");

    fireEvent.click(correctButton);

    expect(screen.getByText("Q2?")).toBeInTheDocument();
    expect(screen.getByText("2 cards left")).toBeInTheDocument();
  });

  it("moves to the next card when Incorrect is clicked", () => {
    render(<FlashCardGame cards={EXAMPLE_CARDS} />);
    const incorrectButton = screen.getByText("Incorrect");

    fireEvent.click(incorrectButton);

    expect(screen.getByText("Q2?")).toBeInTheDocument();
    expect(screen.getByText("2 cards left")).toBeInTheDocument();
  });

  it("shows deck finished message after last card", () => {
    render(<FlashCardGame cards={EXAMPLE_CARDS} />);
    const correctButton = screen.getByText("Correct");

    // Click through all cards
    for (let i = 0; i < EXAMPLE_CARDS.length; i++) {
      fireEvent.click(correctButton);
    }

    expect(screen.getByText("🎉 You finished all cards!")).toBeInTheDocument();
  });
});
