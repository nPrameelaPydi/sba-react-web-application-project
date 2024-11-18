export default function Scoreboard({ score, onPlayAgain }) {
  return (
    <div className="scoreboard-container">
      <h2 className="scoreboard-title">Game Over!</h2>
      {/*<h3 className="scoreboard-score">Your Score: {score}</h3>*/}
      <button className="scoreboard-button" onClick={onPlayAgain}>
        Play Again
      </button>
      <p className="scoreboard-note">More implementation coming soon...</p>
    </div>
  );
}
