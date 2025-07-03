import { useContext } from "react";
import { GameContext } from "./GameContext";

export default function GameBoard() {
  const game = useContext(GameContext);
  const size = game.gameSize;
  return (
    <div className="gameBoard">
      {[...Array(size ** 2)].map((_, idx) => {
        const flexBasisVal = `${Math.round((1 / size) * 100)}%`;
        return (
          <div key={idx} className="holeItem" style={{ flexBasis: flexBasisVal }}>
            <img src="hole.png" />
          </div>
        );
      })}
    </div>
  );
}
