import { useState } from "react";
import GamePage from "./game/GamePage";
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
        <GamePage />
      </GameProvider>
    </main>
  );
}
