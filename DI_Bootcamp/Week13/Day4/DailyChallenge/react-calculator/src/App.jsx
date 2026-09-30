import { useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);

    let total;

    if (operation === "add") {
      total = num1 + num2;
    } else if (operation === "subtract") {
      total = num1 - num2;
    } else if (operation === "multiply") {
      total = num1 * num2;
    } else if (operation === "divide") {
      total = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    }

    setResult(total);
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>

      <input
        type="number"
        placeholder="First number"
        value={firstNumber}
        onChange={event => setFirstNumber(event.target.value)}
      />

      <select
        value={operation}
        onChange={event => setOperation(event.target.value)}
      >
        <option value="add">Addition</option>
        <option value="subtract">Subtraction</option>
        <option value="multiply">Multiplication</option>
        <option value="divide">Division</option>
      </select>

      <input
        type="number"
        placeholder="Second number"
        value={secondNumber}
        onChange={event => setSecondNumber(event.target.value)}
      />

      <button onClick={calculate}>
        Calculate
      </button>

      {result !== null && (
        <h2>
          Result: {result}
        </h2>
      )}
    </div>
  );
}

export default App;