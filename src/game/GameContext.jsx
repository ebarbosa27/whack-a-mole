import { createContext, useState } from "react";

export const GameContext = createContext(null);

export default function GameProvider({ children }) {
  const [gameScore, setGameScore] = useState(0);
  const [gameSize, setGameSize] = useState(3);

  function increaseScore() {
    setGameScore((prev) => prev++);
  }

  function increaseGameSize() {
    setGameSize((prev) => prev + 1);
    console.log(gameSize);
  }

  function decreaseGameSize() {
    setGameSize((prev) => prev - 1);
    console.log(gameSize);
  }

  return (
    <GameContext.Provider
      value={{ gameScore, increaseScore, gameSize, increaseGameSize, decreaseGameSize }}
    >
      {children}
    </GameContext.Provider>
  );
}
