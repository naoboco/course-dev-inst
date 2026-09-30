import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);
  const [lastAction, setLastAction] = useState<string>("No action yet");

  const increment = () => {
    setCount(currentCount => currentCount + 1);
    setLastAction("Increment");
  };

  const decrement = () => {
    setCount(currentCount => currentCount - 1);
    setLastAction("Decrement");
  };

  return (
    <div>
      <h2>Exercise 3 - Counter</h2>

      <p>Count: {count}</p>
      <p>Last action: {lastAction}</p>

      <button onClick={increment}>
        Increment
      </button>

      <button onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;