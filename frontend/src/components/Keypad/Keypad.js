import React from "react";

export default function Keypad({ usedKeys, onKeyPress }) {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="keypad">
      {letters.map((letter) => {
        const color = usedKeys[letter] || ""; // Default to empty string if undefined
        return (
          <div
            key={letter}
            className={`key ${color}`}
            onClick={() => onKeyPress(letter)}
          >
            {letter}
          </div>
        );
      })}
    </div>
  );
}
