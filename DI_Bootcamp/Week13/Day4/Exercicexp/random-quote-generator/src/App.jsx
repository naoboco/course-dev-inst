import { useState } from "react";
import quotes from "./QuotesDatabase";
import "./App.css";

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#fb6964",
  "#342224",
  "#472e32",
  "#bdbb99",
  "#77b1a9",
  "#73a857"
];

function App() {
  const [currentQuote, setCurrentQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  const [color, setColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );

  const generateNewQuote = () => {
    let newQuote;
    let newColor;

    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote.quote === currentQuote.quote);

    do {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === color);

    setCurrentQuote(newQuote);
    setColor(newColor);
  };

  return (
    <div
      className="page"
      style={{ backgroundColor: color }}
    >
      <div className="quote-box">
        <h1 style={{ color }}>
          “{currentQuote.quote}”
        </h1>

        <p
          className="author"
          style={{ color }}
        >
          - {currentQuote.author || "Unknown"}
        </p>

        <button
          onClick={generateNewQuote}
          style={{ backgroundColor: color }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;