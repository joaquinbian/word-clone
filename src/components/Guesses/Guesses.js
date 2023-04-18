import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function Guesses({ guesses, results }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, index) => (
        <Guess key={index} value={guesses[index]} result={results[index]} />
      ))}
    </div>
  );
}

export default Guesses;
