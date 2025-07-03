import "./gameboard.css";

export default function GameBoard({ size }) {
  return (
    <div className="gameboard">
      {[...Array(size ** 2)].map((_, idx) => {
        const flexBasisVal = `${Math.round((1 / size) * 100)}%`;
        console.log(flexBasisVal);
        return (
          <div key={idx} className="holeItem" style={{ flexBasis: flexBasisVal }}>
            <img src="hole.png" />
          </div>
        );
      })}
    </div>
  );
}
