import { createContext, useState } from "react";

export const GameContext = createContext(null);

export default function GameProvider({ children }) {
  const [gameScore, setGameScore] = useState(0);

  function increaseScore() {
    setGameScore((prev) => prev++);
  }

  return (
    <GameContext.Provider value={{ gameScore, increaseScore }}>{children}</GameContext.Provider>
  );
}
