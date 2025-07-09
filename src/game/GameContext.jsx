import { createContext, useState } from "react";

export const GameContext = createContext(null);

export default function GameProvider({ children }) {
  const [gameScore, setGameScore] = useState(0);
  const [gameSize, setGameSize] = useState(3);
  const [gameStatus, setGameStatus] = useState("stopped");
  const [moleLocation, setMoleLocation] = useState(-1);

  function increaseScore() {
    setGameScore((prev) => ++prev);
  }

  function increaseGameSize() {
    setGameSize((prev) => ++prev);
  }

  function decreaseGameSize() {
    setGameSize((prev) => --prev);
  }

  function startGame() {
    setGameStatus("ongoing");
    setGameScore(0);
    newMoleLocation();
  }

  function restartGame() {
    setGameStatus("stopped");
    setMoleLocation(-1);
  }

  function newMoleLocation() {
    let newMoleLocation;
    while (newMoleLocation === undefined || moleLocation === newMoleLocation) {
      newMoleLocation = Math.floor(Math.random() * gameSize ** 2);
    }
    setMoleLocation(newMoleLocation);
  }

  return (
    <GameContext.Provider
      value={{
        gameScore,
        increaseScore,
        gameSize,
        increaseGameSize,
        decreaseGameSize,
        gameStatus,
        startGame,
        restartGame,
        moleLocation,
        newMoleLocation,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
