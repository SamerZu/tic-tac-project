export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>No winner!</p>}
      <button onClick={onRestart}>rematch</button>
    </div>
  );
}
