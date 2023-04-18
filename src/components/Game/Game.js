import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm/GuessForm";
import Guesses from "../Guesses/Guesses";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [results, setResults] = React.useState([]);

  const addGuess = (guess) => {
    setGuesses((oldGuesses) => [...oldGuesses, guess]);
    const result = checkGuess(guess, answer);
    setResults((oldResults) => [...oldResults, result]);
  };
  return (
    <>
      <Guesses guesses={guesses} results={results} />
      <GuessForm addGuess={addGuess} />
    </>
  );
}

export default Game;
