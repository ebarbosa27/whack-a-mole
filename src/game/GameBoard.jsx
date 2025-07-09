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

  function createMole(_, idx) {
    let holeSrc = "hole";
    if (idx === game.moleLocation) {
      holeSrc = "mole";
    }
    return (
      <div
        key={idx}
        className={`holeItem ${holeSrc}`}
        onClick={() => checkForMole(idx === game.moleLocation)}
      />
    );
  }

  return (
    <div
      className="gameBoard"
      style={{
        gridTemplateColumns: `repeat(${size}, minmax(50px, 1fr))`,
        gridTemplateRows: `repeat(${size}, minmax(50px, 1fr))`,
      }}
    >
      {gameMap.map(createMole)}
    </div>
  );
}
