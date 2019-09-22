/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      Counter: <span data-testid="counter-value">{counter}</span>
      <div>
        <a onClick={incrementCounter}>Increment</a>
      </div>
    </div>
  );
};
