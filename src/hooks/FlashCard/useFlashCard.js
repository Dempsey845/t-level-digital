import { useState } from "react";

export function useFlashCard(initialFlipped = false) {
  const [flipped, setFlipped] = useState(initialFlipped);

  function flip() {
    setFlipped(!flipped);
  }

  return { flipped, flip };
}
