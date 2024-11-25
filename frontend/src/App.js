import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GoogleSignUp from './components/GoogleSignUp/GoogleSignUp';
 import Scoreboard from './components/Scoreboard/Scoreboard'; // Import Scoreboard
 import GameScreen from './components/GameScreen/GameScreen';

const App = () => {
  const [scores, setScores] = useState([]);

  // Load scores from localStorage on first render
  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem('scores')) || [];
    setScores(storedScores);
  }, []);

  // Save scores to localStorage whenever they update
  useEffect(() => {
    localStorage.setItem('scores', JSON.stringify(scores));
  }, [scores]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GoogleSignUp />} />
        <Route path="/game" element={<GameScreen setScores={setScores} />} />
        <Route path="/scoreboard" element={<Scoreboard scores={scores} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
