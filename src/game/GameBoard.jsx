import { useContext, useState } from "react";
import { GameContext } from "./GameContext";

export default function GameBoard() {
  const game = useContext(GameContext);
  const size = game.gameSize;
  const [moleLocation, setMoleLocation] = useState(randomMoleLocation());

  const gameMap = [...Array(size ** 2)];

  function randomMoleLocation() {
    return Math.floor(Math.random() * size ** 2);
  }

  function checkForMole(isMole) {
    if (isMole) {
      game.increaseScore();
      setMoleLocation(randomMoleLocation());
    }
  }

  return (
    <div className="gameBoard">
      {gameMap.map((_, idx) => {
        let holeSrc = "hole.png";
        if (idx === moleLocation) {
          holeSrc = "mole.png";
        }
        return (
          <div
            key={idx}
            className="holeItem"
            style={{ flexBasis: `${Math.round((1 / size) * 100)}%` }}
            onClick={() => checkForMole(idx === moleLocation)}
          >
            <img src={holeSrc} />
          </div>
        );
      })}
    </div>
  );
}
