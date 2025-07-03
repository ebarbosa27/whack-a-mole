import { useState } from "react";
import GameBoard from "./game/GameBoard";
import HomePage from "./homescreen/HomePage";

export default function App() {
  const [gameStart, setGameStart] = useState(false);

  // Display welcome page before game has started
  if (!gameStart) return <HomePage setGameStart={setGameStart} />;
  // Display game page after clicking start
  return (
    <main>
      <GameBoard size={3} />
    </main>
  );
}
