// import { useState } from "react";
// import Wordle from "./components/Wordle/Wordle"; // Assuming you have the Wordle component
// import Keypad from "./components/Keypad/Keypad";

// function App() {
//   // List of possible words (this is the "db.json" data in memory)
//   const wordList = [
//     "ninja",
//     "spade",
//     "pools",
//     "drive",
//     "relax",
//     "times",
//     "train",
//     "cores",
//     "pours",
//     "blame",
//     "banks",
//     "phone",
//     "bling",
//     "coins",
//     "hello",
//   ];

//   // Randomly select one word from the list
//   const randomSolution = wordList[Math.floor(Math.random() * wordList.length)];

//   // Store the solution in state
//   const [solution] = useState(randomSolution);

//   return (
//     <div className="App">
//       <h1>Wordle (Lingo)</h1>
//       <Wordle solution={solution} />{" "}
//       {/* Pass the solution to your Wordle component */}
//       <Keypad solution={solution} />
//     </div>
//   );
// }

// export default App;
//----------------------------ok
// import { useState } from "react";
// import Wordle from "./components/Wordle/Wordle"; // Assuming this is the correct path for your Wordle component
// import Keypad from "./components/Keypad/Keypad"; // Assuming this is the correct path for your Keypad component

// function App() {
//   // List of possible words (this is the "db.json" data in memory)
//   const wordList = [
//     "ninja",
//     "spade",
//     "pools",
//     "drive",
//     "relax",
//     "times",
//     "train",
//     "cores",
//     "pours",
//     "blame",
//     "banks",
//     "phone",
//     "bling",
//     "coins",
//     "hello",
//     "knife"
//   ];

//   // Randomly select one word from the list
//   const randomSolution = wordList[Math.floor(Math.random() * wordList.length)];

//   // Store the solution in state
//   const [solution] = useState(randomSolution);

//   // Initialize usedKeys state to track the colors of keys (if necessary)
//   const [usedKeys, setUsedKeys] = useState({
//     a: "",
//     b: "",
//     c: "",
//     d: "",
//     e: "",
//     f: "",
//     g: "",
//     h: "",
//     i: "",
//     j: "",
//     k: "",
//     l: "",
//     m: "",
//     n: "",
//     o: "",
//     p: "",
//     q: "",
//     r: "",
//     s: "",
//     T: "",
//     u: "",
//     v: "",
//     w: "",
//     x: "",
//     y: "",
//     z: "",
//   });

//   return (
//     <div className="App">
//       <h1>Wordle</h1>

//       {/* Wordle game component */}
//       <Wordle
//         solution={solution}
//         usedKeys={usedKeys}
//         setUsedKeys={setUsedKeys}
//       />

//       {/* Keypad component */}
//       {/* <Keypad usedKeys={usedKeys} /> */}
//     </div>
//   );
// }

// export default App;

// ..............no

// import { useState } from "react";
// import Wordle from "./components/Wordle/Wordle";
// import Keypad from "./components/Keypad/Keypad";
// import Modal from "./components/Modal/Modal";

// function App() {
//   const wordList = [
//     "ninja",
//     "spade",
//     "pools",
//     "drive",
//     "relax",
//     "times",
//     "train",
//     "cores",
//     "pours",
//     "blame",
//     "banks",
//     "phone",
//     "bling",
//     "coins",
//     "hello",
//     "knife",
//   ];

//   const getRandomSolution = () =>
//     wordList[Math.floor(Math.random() * wordList.length)];

//   // Create state for the solution and other game states
//   const [solution, setSolution] = useState(getRandomSolution());
//   const [usedKeys, setUsedKeys] = useState({});
//   const [currentGuess, setCurrentGuess] = useState("");
//   const [attempts, setAttempts] = useState(0);
//   const [isCorrect, setIsCorrect] = useState(false);

//   const handleKeyPress = (letter) => {
//     if (currentGuess.length < 5) {
//       setCurrentGuess((prevGuess) => prevGuess + letter);
//     }
//   };

//   const handleSubmit = () => {
//     if (currentGuess.length === 5) {
//       setAttempts((prevAttempts) => prevAttempts + 1);
//       if (currentGuess === solution) {
//         setIsCorrect(true);
//       }
//       // Clear the current guess for the next input
//       setCurrentGuess("");
//     }
//   };

//   const handleRestart = () => {
//     // Reset all relevant state variables to restart the game
//     setUsedKeys({});
//     setCurrentGuess("");
//     setAttempts(0);
//     setIsCorrect(false);
//     setSolution(getRandomSolution()); // Set a new random solution
//   };

//   return (
//     <div className="App">
//       <h1>Wordle</h1>
//       <Wordle solution={solution} usedKeys={usedKeys} />
//       <Keypad usedKeys={usedKeys} onKeyPress={handleKeyPress} />
//       {isCorrect !== null && (
//         <Modal
//           isCorrect={isCorrect}
//           solution={solution}
//           turn={attempts}
//           onRestart={handleRestart}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

// ....................

// import { useState } from "react";
// import Wordle from "./components/Wordle/Wordle";
// import Keypad from "./components/Keypad/Keypad";
// import Modal from "./components/Modal/Modal";

// function App() {
//   const wordList = [
//     "ninja",
//     "spade",
//     "pools",
//     "drive",
//     "relax",
//     "times",
//     "train",
//     "cores",
//     "pours",
//     "blame",
//     "banks",
//     "phone",
//     "bling",
//     "coins",
//     "hello",
//     "knife",
//   ];

//   const getRandomSolution = () =>
//     wordList[Math.floor(Math.random() * wordList.length)];

//   // Create state for the solution and other game states
//   const [solution, setSolution] = useState(getRandomSolution());
//   const [usedKeys, setUsedKeys] = useState({});
//   const [currentGuess, setCurrentGuess] = useState("");
//   const [attempts, setAttempts] = useState(0);
//   const [isCorrect, setIsCorrect] = useState(false);

//   const handleKeyPress = (letter) => {
//     if (currentGuess.length < 5) {
//       setCurrentGuess((prevGuess) => prevGuess + letter);
//     }
//   };

//   const handleSubmit = () => {
//     if (currentGuess.length === 5) {
//       setAttempts((prevAttempts) => prevAttempts + 1);
//       if (currentGuess === solution) {
//         setIsCorrect(true);
//       } else {
//         // Optional: Update usedKeys based on the guess result
//         // setUsedKeys({...usedKeys, [currentGuess]: 'incorrectColor'}); // Update based on logic
//       }
//       // Clear the current guess for the next input
//       setCurrentGuess("");
//     }
//   };

//   const handleRestart = () => {
//     // Reset all relevant state variables to restart the game
//     setUsedKeys({});
//     setCurrentGuess("");
//     setAttempts(0);
//     setIsCorrect(false);
//     setSolution(getRandomSolution()); // Set a new random solution
//   };

//   return (
//     <div className="App">
//       <h1>Wordle</h1>
//       <Wordle solution={solution} usedKeys={usedKeys} />
//       <Keypad usedKeys={usedKeys} onKeyPress={handleKeyPress} />
//       {isCorrect !== null && (
//         <Modal
//           isCorrect={isCorrect}
//           solution={solution}
//           turn={attempts}
//           onRestart={handleRestart}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

//888888888888888

// // App.js
// import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Wordle from "./components/Wordle/Wordle"; // Wordle component
// import Keypad from "./components/Keypad/Keypad"; // Keypad component
// // import Modal from "./components/Modal/Modal"; // Modal component
// import Scoreboard from "./components/Score/Score";
// import Modal from "./components/Modal/Modal";
// // import Scoreboard from "./components/Scoreboard"; // Scoreboard component

// function App() {
//   const wordList = [
//     "ninja",
//     "spade",
//     "pools",
//     "drive",
//     "relax",
//     "times",
//     "train",
//     "cores",
//     "pours",
//     "blame",
//     "banks",
//     "phone",
//     "bling",
//     "coins",
//     "hello",
//   ];

//   const getRandomSolution = () =>
//     wordList[Math.floor(Math.random() * wordList.length)];

//   const [solution, setSolution] = useState(getRandomSolution());
//   const [currentGuess, setCurrentGuess] = useState("");
//   const [attempts, setAttempts] = useState(0);
//   const [usedKeys, setUsedKeys] = useState({});
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [gameOver, setGameOver] = useState(false);
//   const [scores, setScores] = useState([]); // Store scores

//   const handleKeyPress = (letter) => {
//     if (currentGuess.length < 5 && !gameOver) {
//       setCurrentGuess((prevGuess) => prevGuess + letter);
//     }
//   };

//   const handleSubmit = () => {
//     if (currentGuess.length === 5 && !gameOver) {
//       setAttempts((prevAttempts) => prevAttempts + 1);
//       if (currentGuess === solution) {
//         setIsCorrect(true);
//         setGameOver(true);
//         setScores((prevScores) => [...prevScores, attempts + 1]); // Save score
//       } else {
//         setUsedKeys((prevKeys) => ({
//           ...prevKeys,
//           [currentGuess]: "wrong", // Update your key coloring logic
//         }));
//       }
//       setCurrentGuess(""); // Clear the input after submission
//     }
//   };

//   const handleRestart = () => {
//     console.log("Restarting game...");
//     setSolution(getRandomSolution());
//     setCurrentGuess("");
//     setAttempts(0);
//     setUsedKeys({});
//     setIsCorrect(false);
//     setGameOver(false);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <h1>Wordle</h1>

//         <Routes>
//           <Route
//             path="/"
//             element={
//               <div>
//                 <Wordle
//                   solution={solution}
//                   currentGuess={currentGuess}
//                   attempts={attempts}
//                   usedKeys={usedKeys}
//                   onSubmit={handleSubmit}
//                   gameOver={gameOver}
//                 />
//                 <Keypad usedKeys={usedKeys} onKeyPress={handleKeyPress} />
//                 {gameOver && (
//                   <Modal
//                     isCorrect={isCorrect}
//                     solution={solution}
//                     turn={attempts}
//                     onRestart={handleRestart}
//                   />
//                 )}
//               </div>
//             }
//           />
//           <Route path="/scoreboard" element={<Scoreboard scores={scores} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

//-------

// import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Wordle from "./components/Wordle/Wordle"; // Wordle component
// import Keypad from "./components/Keypad/Keypad"; // Keypad component
// import Scoreboard from "./components/Score/Score"; // Scoreboard component
// import Modal from "./components/Modal/Modal"; // Modal component

// function App() {
//   const wordList = [
//     "ninja",
//     "spade",
//     "pools",
//     "drive",
//     "relax",
//     "times",
//     "train",
//     "cores",
//     "pours",
//     "blame",
//     "banks",
//     "phone",
//     "bling",
//     "coins",
//     "hello",
//   ];

//   const getRandomSolution = () =>
//     wordList[Math.floor(Math.random() * wordList.length)];

//   const [solution, setSolution] = useState(getRandomSolution());
//   const [currentGuess, setCurrentGuess] = useState("");
//   const [attempts, setAttempts] = useState(0);
//   const [usedKeys, setUsedKeys] = useState({});
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [gameOver, setGameOver] = useState(false);
//   const [scores, setScores] = useState([]); // Store scores

//   const handleKeyPress = (letter) => {
//     if (currentGuess.length < 5 && !gameOver) {
//       setCurrentGuess((prevGuess) => prevGuess + letter);
//     }
//   };

//   const handleSubmit = () => {
//     if (currentGuess.length === 5 && !gameOver) {
//       setAttempts((prevAttempts) => prevAttempts + 1);
//       if (currentGuess === solution) {
//         setIsCorrect(true);
//         setGameOver(true);
//         setScores((prevScores) => [...prevScores, attempts + 1]); // Save score
//       } else {
//         setUsedKeys((prevKeys) => ({
//           ...prevKeys,
//           [currentGuess]: "wrong", // Update your key coloring logic
//         }));
//       }
//       setCurrentGuess(""); // Clear the input after submission
//     }
//   };

//   const handleRestart = () => {
//     console.log("Restarting game...");
//     setSolution(getRandomSolution());
//     setCurrentGuess("");
//     setAttempts(0);
//     setUsedKeys({});
//     setIsCorrect(false);
//     setGameOver(false);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <h1>Wordle (Lingo)</h1>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <div>
//                 <Wordle
//                   solution={solution}
//                   currentGuess={currentGuess}
//                   attempts={attempts}
//                   usedKeys={usedKeys}
//                   onSubmit={handleSubmit}
//                   gameOver={gameOver}
//                 />
//                 <Keypad usedKeys={usedKeys} onKeyPress={handleKeyPress} />
//                 {gameOver && (
//                   <Modal
//                     isCorrect={isCorrect}
//                     solution={solution}
//                     turn={attempts}
//                     onRestart={handleRestart}
//                   />
//                 )}
//               </div>
//             }
//           />
//           <Route path="/scoreboard" element={<Scoreboard scores={scores} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

//important thing

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wordle from "./components/Wordle/Wordle"; // Wordle component
import Keypad from "./components/Keypad/Keypad"; // Keypad component
import Scoreboard from "./components/Score/Score"; // Scoreboard component
import Modal from "./components/Modal/Modal"; // Modal component
// import Scoreboard from "./components/Scoreboard/Scoreboard";

function App() {
  const wordList = [
    "nests",
    "spade",
    "pools",
    "drive",
    "relax",
    "times",
    "train",
    "cores",
    "pours",
    "blame",
    "banks",
    "phone",
    "bling",
    "coins",
    "hello",
  ];

  const getRandomSolution = () =>
    wordList[Math.floor(Math.random() * wordList.length)];

  const [solution, setSolution] = useState(getRandomSolution());
  const [currentGuess, setCurrentGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [usedKeys, setUsedKeys] = useState({});
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [scores, setScores] = useState([]); // Store scores

  const handleKeyPress = (letter) => {
    if (currentGuess.length < 5 && !gameOver) {
      setCurrentGuess((prevGuess) => prevGuess + letter);
    }
  };

  const handleSubmit = () => {
    if (currentGuess.length === 5 && !gameOver) {
      setAttempts((prevAttempts) => prevAttempts + 1);
      if (currentGuess === solution) {
        setIsCorrect(true);
        setGameOver(true);
        setScores((prevScores) => [...prevScores, attempts + 1]); // Save score
      } else {
        setUsedKeys((prevKeys) => ({
          ...prevKeys,
          [currentGuess]: "wrong", // Update your key coloring logic
        }));
      }
      setCurrentGuess(""); // Clear the input after submission
    }
  };

  const handleRestart = () => {
    console.log("Restarting game...");
    setSolution(getRandomSolution());
    setCurrentGuess("");
    setAttempts(0);
    setUsedKeys({});
    setIsCorrect(false);
    setGameOver(false);
  };

  // return (
  //   <BrowserRouter>
  //     <div className="App">
  //       <h1>Wordle</h1>

  //       <Routes>
  //         <>
  //           <Route
  //             path="/"
  //             element={
  //               <Wordle
  //                 solution={solution}
  //                 currentGuess={currentGuess}
  //                 attempts={attempts}
  //                 usedKeys={usedKeys}
  //                 onSubmit={handleSubmit}
  //                 gameOver={gameOver}
  //               />
  //             }
  //           />

  //           <Route
  //             path="/"
  //             element={
  //               <Wordle
  //                 solution={solution}
  //                 currentGuess={currentGuess}
  //                 attempts={attempts}
  //                 usedKeys={usedKeys}
  //                 onSubmit={handleSubmit}
  //                 gameOver={gameOver}
  //               />
  //                <Keypad usedKeys={usedKeys} onKeyPress={handleKeyPress} />
  //               {gameOver && (
  //                 <Modal
  //                   isCorrect={isCorrect}
  //                   solution={solution}
  //                   turn={attempts}
  //                   onRestart={handleRestart}
  //                 /> 
  //                )} 
  //             }
  //           />
  //           <Route
  //             path="/scoreboard"
  //             element={<Scoreboard scores={scores} />}
  //           />
  //         </>
  //       </Routes>
  //     </div>
  //   </BrowserRouter>
  // );
return (
  <BrowserRouter>
      <div className="App">
        <h1>Wordle</h1>
        <Routes>
          <Route
            path="/"
            element={
              <Wordle
                solution={solution}
                currentGuess={currentGuess}
                attempts={attempts}
                usedKeys={usedKeys}
                onSubmit={handleSubmit}
                gameOver={gameOver}
              />
            }
          />
          {/* <Route
            path="/scoreboard"
            element={<Scoreboard scores={scores} />}
          /> */}
        </Routes>
      </div>
    </BrowserRouter>
);

}

export default App;

//important thing completed
