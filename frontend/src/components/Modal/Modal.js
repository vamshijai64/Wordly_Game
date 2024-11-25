import React from "react";
import { Link } from "react-router-dom";

export default function Modal({ isCorrect, solution, turn, onRestart }) {
  return (
    <div className="modal">
      {isCorrect ? (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} guesses :)</p>
          {/* <button onClick={onRestart}>Restart Game</button> */}
          {/* <Link to = "/">Restart Game</Link> */}
          {/* <Link to="/home">Back to Game</Link> */}
          <Link to="/scoreboard">Scoreboard</Link>
        </div>
      ) : (
        <div>
          <h1>You Lost!</h1>
          <p className="solution">The answer was: {solution}</p>
          <p>Better luck next time :)</p>
          {/* <button onClick={onRestart}>Restart Game</button> */}
          <br />
          {/* <Link to = "/">Restart Game</Link> */}
          {/* <button>
            <Link to="/home">Back to Game</Link>
          </button> */}
          <Link to="/scoreboard">Scoreboard</Link>
        </div>
      )}
    </div>
  );
}
