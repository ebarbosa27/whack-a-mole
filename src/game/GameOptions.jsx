import { useContext } from "react";
import { GameContext } from "./GameContext";

export default function GameOptions() {
  const game = useContext(GameContext);

  function setOptions() {
    if (game.gameStatus === "ongoing") {
      return (
        <>
          <div className="gameButtons">
            <button onClick={() => game.stopGame()}>stop</button>
            <button onClick={() => game.restartGame()}>restart</button>
          </div>
        </>
      );
    }

    const disableDecreaseButton = game.gameSize === 2;
    const disableIncreaseButton = game.gameSize === 5;

    return (
      <>
        <button onClick={() => game.startGame()}>start</button>
        <div>
          <p>Board Size: </p>
          <button
            className={disableDecreaseButton ? "disableButton" : undefined}
            onClick={() => game.decreaseGameSize()}
          >
            decrease{" "}
          </button>
          <button
            className={disableIncreaseButton ? "disableButton" : undefined}
            onClick={() => game.increaseGameSize()}
          >
            increase
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="gameOptions">
      <div className="gameScore">
        <p>score: {game.gameScore}</p>
      </div>
      <div className="gameButtons">{setOptions()}</div>
    </div>
  );
}
