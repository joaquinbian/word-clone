import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm/GuessForm";
import Guesses from "../Guesses/Guesses";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [results, setResults] = React.useState([]);
  const [hasWon, setHasWon] = React.useState(undefined);

  const addGuess = (guess) => {
    if (NUM_OF_GUESSES_ALLOWED > guesses.length) {
      setGuesses((oldGuesses) => [...oldGuesses, guess]);
      const result = checkGuess(guess, answer);
      setResults((oldResults) => [...oldResults, result]);
    }
  };

  const checkGame = (guesses, answer) => {
    if (guesses[guesses.length - 1] === answer) {
      setHasWon(true);
    } else if (NUM_OF_GUESSES_ALLOWED === guesses.length) {
      setHasWon(false);
    }
  };

  React.useEffect(() => {
    checkGame(guesses, answer);
  }, [guesses]);

  return (
    <>
      {hasWon !== undefined && (
        <Banner hasWon={hasWon} answer={answer} guesses={guesses} />
      )}
      <Guesses guesses={guesses} results={results} />
      <GuessForm disabled={hasWon !== undefined} addGuess={addGuess} />
    </>
  );
}

export default Game;
