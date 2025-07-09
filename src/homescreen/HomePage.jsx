import "./home.css";

export default function HomePage({ setGameStart }) {
  return (
    <div className="homepage">
      <h1>Whack-A-Mole</h1>
      <p>
        Hit the mole and win a prize. The prize of a bigger score.
        <br />
        When the mole is hit your score will increase by 1 and the mole will change locations. Go as
        far as you can. <br />
        Good luck!
      </p>
      <button onClick={() => setGameStart(true)}>Start Game</button>
    </div>
  );
}
