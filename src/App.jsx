import { useState } from "react";
import GameBoard from "./game/GameBoard";
import HomePage from "./homescreen/HomePage";
import GameProvider from "./game/GameContext";
import "./app.css";

export default function App() {
  const [gameStart, setGameStart] = useState(false);

  // Display welcome page before game has started
  if (!gameStart) return <HomePage setGameStart={setGameStart} />;
  // Display game page after clicking start
  return (
    <main>
      <GameProvider>
        <GameBoard size={3} />
      </GameProvider>
    </main>
  );
}
