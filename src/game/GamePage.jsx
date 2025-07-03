import GameOptions from "./GameOptions";
import GameBoard from "./GameBoard";
import "./game.css";

export default function GamePage() {
  return (
    <div className="gamePage">
      <GameOptions />
      <GameBoard />
    </div>
  );
}
