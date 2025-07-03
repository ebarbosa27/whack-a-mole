export default function HomePage({ setGameStart }) {
  return (
    <>
      <h1>Whack-A-Mole</h1>
      <button onClick={() => setGameStart(true)}>Start Game</button>
    </>
  );
}
