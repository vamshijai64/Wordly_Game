import React from 'react';

const Scoreboard = ({ scores }) => {
  return (
    <div className="scoreboard">
      <h1>Scoreboard</h1>
      <ul>
        {scores.length === 0 ? (
          <li>No scores available</li>
        ) : (
          scores.map((score, index) => (
            <li key={index}>Game {index + 1}: {score} points</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Scoreboard;


