import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  let className = "normal";
  if (counter % 3 === 0 && counter % 5 === 0) {
    className = "fizzbuzz";
  } else if (counter % 3 === 0) {
    className = "fizz";
  } else if (counter % 5 === 0) {
    className = "buzz";
  }

  return (
    <div id="main">
      <div id="counter" className={className}>
        {counter}
      </div>
      <button id="increment" onClick={handleIncrement}>
        Increment
      </button>
      <button id="decrement" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default App;
