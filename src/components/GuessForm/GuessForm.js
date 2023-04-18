import React from "react";
//import "../../styles.css";

function GuessForm({ addGuess, disabled }) {
  const [guess, setGuess] = React.useState("");

  const onGuessHandler = (e) => {
    setGuess(e.target.value.toUpperCase());
  };

  const onSubmitGuess = (e) => {
    e.preventDefault();
    // console.log({ guess });
    addGuess(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmitGuess}>
      <label htmlFor="guess-input">Enter guess: </label>
      <input
        disabled={disabled}
        id="guess-input"
        value={guess}
        onChange={onGuessHandler}
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      />
    </form>
  );
}

export default GuessForm;
