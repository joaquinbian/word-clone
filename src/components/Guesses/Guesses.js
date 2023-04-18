import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {range(6).map((guess, index) => (
        <Guess key={index} value={guesses[index]} />
      ))}
    </div>
  );
}

export default Guesses;
