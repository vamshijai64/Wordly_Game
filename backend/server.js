const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const library = require('../backend/library/dictionary');

app.use(cors());

// const wordList = [
//   "ninja", "spade", "pools", "drive", "relax", "times", "train", 
//   "cores", "pours", "blame", "banks", "phone", "bling", "coins", "hello",
// ];

app.get("/api/wordlist", (req, res) => {
  //res.json(wordList);
  res.json(library.realDictionary);
});

//const PORT = 5000;
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
