import React from "react";
import { range } from "../../utils";

function Guess({ value, result }) {
  return (
    <p className="guess">
      {range(5).map((i, index) => (
        <span key={index} className={`cell ${result && result[index].status}`}>
          {value ? value[index] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
