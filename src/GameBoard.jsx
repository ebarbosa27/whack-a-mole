export default function GameBoard({ size }) {
  return (
    <div>
      {[...Array(size ** 2)].map((_, idx) => {
        return <img src="../public/hole.png" key={idx} />;
      })}
    </div>
  );
}
