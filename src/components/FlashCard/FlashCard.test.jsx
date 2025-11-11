/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import FlashCard from "./FlashCard";

describe("FlashCard", () => {
  it("front side has question", async () => {
    render(<FlashCard question={"What is 2 + 2?"} answer={"4"} />);
    const frontSide = screen.getByTestId("front_side");

    expect(frontSide.textContent).toEqual("What is 2 + 2?");
  });

  it("back side has answer", async () => {
    render(<FlashCard question={"What is 2 + 2?"} answer={"4"} />);
    const backSide = screen.getByTestId("back_side");

    expect(backSide.textContent).toEqual("4");
  });
});
