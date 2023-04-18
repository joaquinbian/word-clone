import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm/GuessForm";
import Guesses from "../Guesses/Guesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const addGuess = (guess) => {
    const nextGuess = {
      value: guess,
      id: Math.random() * 100,
    };

    setGuesses((oldGuesses) => [...oldGuesses, nextGuess]);
  };
  return (
    <>
      <Guesses guesses={guesses} />
      <GuessForm addGuess={addGuess} />
    </>
  );
}

export default Game;
