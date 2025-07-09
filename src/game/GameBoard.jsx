import { useContext } from "react";
import { GameContext } from "./GameContext";

export default function GameBoard() {
  const game = useContext(GameContext);
  const size = game.gameSize;
  const gameMap = [...Array(size ** 2)];

  function checkForMole(isMole) {
    if (isMole) {
      game.increaseScore();
      game.newMoleLocation();
    }
  }

  return (
    <div className="gameBoard">
      {gameMap.map((_, idx) => {
        let holeSrc = "hole.png";
        if (idx === game.moleLocation) {
          holeSrc = "mole.png";
        }
        return (
          <div
            key={idx}
            className="holeItem"
            style={{ flexBasis: `${Math.round((1 / size) * 100)}%` }}
            onClick={() => checkForMole(idx === game.moleLocation)}
          >
            <img src={holeSrc} />
          </div>
        );
      })}
    </div>
  );
}
