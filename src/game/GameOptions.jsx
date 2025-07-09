import { useContext } from "react";
import { GameContext } from "./GameContext";

export default function GameOptions() {
  const game = useContext(GameContext);

  if (game.gameStatus === "ongoing") {
    return (
      <div className="gameOptions">
        <button onClick={() => game.stopGame()}>stop</button>
        <div>score: {game.gameScore}</div>
        <button onClick={() => game.restartGame()}>restart</button>
      </div>
    );
  }

  return (
    <div className="gameOptions">
      <button onClick={() => game.startGame()}>start</button>
      <div>score: {game.gameScore}</div>
      <button onClick={() => game.decreaseGameSize()}>decrease </button>
      <button onClick={() => game.increaseGameSize()}>increase</button>
    </div>
  );
}
