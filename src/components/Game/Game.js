import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm/GuessForm";
import Guesses from "../Guesses/Guesses";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.

// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [results, setResults] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");
  const [answer, setAnswer] = React.useState(sample(WORDS));

  console.info({ answer });

  const addGuess = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    const result = checkGuess(guess, answer);
    setResults((oldResults) => [...oldResults, result]);
    if (guess === answer.toUpperCase()) {
      setGameStatus("won");
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  const restartGame = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setResults([]);
    setGameStatus("running");
  };

  return (
    <>
      {gameStatus !== "running" && (
        <Banner
          gameStatus={gameStatus}
          answer={answer}
          guesses={guesses}
          onRestart={restartGame}
        />
      )}
      <Guesses guesses={guesses} results={results} />
      <GuessForm disabled={gameStatus !== "running"} addGuess={addGuess} />
    </>
  );
}

export default Game;
