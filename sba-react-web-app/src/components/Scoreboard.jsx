export default function Scoreboard({ score, onPlayAgain }) {
  return (
    <div className="scoreboard-container" style={{ marginTop: "2rem" }}>
      <h2 className="scoreboard-title">Game Over!</h2>
      {/*<h3 className="scoreboard-score">Your Score: {score}</h3>*/}
      <button className="scoreboard-button" onClick={onPlayAgain}>
        Play Again
      </button>
      <p className="scoreboard-note" style={{ fontStyle: "italic" }}>
        More implementation coming soon...
      </p>
    </div>
  );
}
