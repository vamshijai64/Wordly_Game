import React, { useState, useEffect } from 'react';
// Assuming Wordle component exists
// import { useNavigate } from 'react-router-dom';
import Wordle from '../Wordle/Wordle';

const GameScreen = ({ setScores }) => {
  const [wordList, setWordList] = useState([]);
  const [solution, setSolution] = useState("");
  const [currentGuess, setCurrentGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [usedKeys, setUsedKeys] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const navigate = useNavigate();

  // Fetch word list from the backend
  useEffect(() => {
    const fetchWordList = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://wordly-game-backend.onrender.com/api/wordlist");
        if (!response.ok) {
          throw new Error("Failed to fetch word list");
        }
        const data = await response.json();
        setWordList(data);
        setSolution(data[Math.floor(Math.random() * data.length)]);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWordList();
  }, []);

  // const handleKeyPress = (letter) => {
  //   if (currentGuess.length < 5 && !gameOver) {
  //     setCurrentGuess((prevGuess) => prevGuess + letter);
  //   }
  // };

  const handleSubmit = () => {
    if (currentGuess.length === 5 && !gameOver) {
      setAttempts((prevAttempts) => prevAttempts + 1);
      if (currentGuess === solution) {
        setGameOver(true);
        // Update scores (add score based on attempts or guesses)
        const newScore = 5 - attempts; // Example score logic
        setScores((prevScores) => {
          return [...prevScores, newScore]; // Add score to array
        });
      }
      setCurrentGuess("");
    }
  };

  const handleRestart = () => {
    setSolution(wordList[Math.floor(Math.random() * wordList.length)]);
    setCurrentGuess("");
    setAttempts(0);
    setUsedKeys({});
    setGameOver(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="game-screen">
      <h1>Wordle Game</h1>
      <Wordle 
        solution={solution} 
        currentGuess={currentGuess} 
        usedKeys={usedKeys} 
        gameOver={gameOver}
        onSubmit={handleSubmit} 
      />
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
};

export default GameScreen;
//--------------------------------------------------
