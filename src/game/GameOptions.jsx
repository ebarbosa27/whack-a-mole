import { useContext } from "react";
import { GameContext } from "./GameContext";

export default function GameOptions() {
  const game = useContext(GameContext);

  return (
    <div className="gameOptions">
      <button onClick={() => game.decreaseGameSize()}>decrease </button>
      <button onClick={() => game.increaseGameSize()}>increase</button>
    </div>
  );
}
