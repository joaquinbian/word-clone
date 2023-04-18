import React from "react";

function Banner({ gameStatus, answer, guesses, onRestart }) {
  if (gameStatus === "lost") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
        <button onClick={onRestart}>restart game</button>
      </div>
    );
  }
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guesses.length} guesses</strong>.
        <button onClick={onRestart}>restart game</button>
      </p>
    </div>
  );
}

export default Banner;
