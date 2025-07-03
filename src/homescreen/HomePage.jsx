import "./home.css";

export default function HomePage({ setGameStart }) {
  return (
    <div className="homepage">
      <h1>Whack-A-Mole</h1>
      <button onClick={() => setGameStart(true)}>Start Game</button>
    </div>
  );
}
