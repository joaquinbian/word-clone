import React from "react";
import "../../styles.css";

function GuessForm() {
  const [guess, setGuess] = React.useState("");

  const onGuessHandler = (e) => {
    setGuess(e.target.value.toUpperCase());
  };

  const onSubmitGuess = (e) => {
    e.preventDefault();
    console.log({ guess });
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmitGuess}>
      <label htmlFor="guess-input">Enter guess: </label>
      <input
        id="guess-input"
        value={guess}
        onChange={onGuessHandler}
        maxLength={5}
        minLength={5}
        title="loco"
        pattern="[A-Za-z]{3}"
      />
    </form>
  );
}

export default GuessForm;
