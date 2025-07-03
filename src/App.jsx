import { useState } from "react";
import GameBoard from "./GameBoard";

export default function App() {
  const [gameStart, setGameStart] = useState(false);

  // Display welcome page before game has started
  if (!gameStart) {
    return (
      <>
        <h1>Whack-A-Mole</h1>
        <button onClick={() => setGameStart(true)}>Start Game</button>
      </>
    );
  }
  // Display game page after clicking start
  return (
    <main>
      <GameBoard size={3} />
    </main>
  );
}
