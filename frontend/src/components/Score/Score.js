import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Score.module.scss";

export default function Scoreboard() {
  const location = useLocation();
  const score = location.state?.score; // Get the score passed from the Modal
  const scores = []; // You will want to maintain this as a state in your main app component.

  return (
    <div>
      <h2 className={styles.head}>Scoreboard</h2>
      <ul>
        {scores.map((s, index) => (
          <li key={index}>Score: {s}%</li>
        ))}
        {score && <li>Last Game Score: {score.toFixed(2)}%</li>} {/* Display the last game score */}
      </ul>
      <Link to="/" className={styles.btn}>
        Restart Game
      </Link>
    </div>
  );
}

