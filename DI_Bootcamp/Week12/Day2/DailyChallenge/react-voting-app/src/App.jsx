import { useState } from "react";
import "./App.css";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const vote = index => {
    const updatedLanguages = [...languages];

    updatedLanguages[index] = {
      ...updatedLanguages[index],
      votes: updatedLanguages[index].votes + 1
    };

    setLanguages(updatedLanguages);
  };

  return (
    <div className="app">
      <h1>Vote Your Language!</h1>

      <div className="languages">
        {languages.map((language, index) => (
          <div className="language-card" key={language.name}>
            <span className="votes">
              {language.votes}
            </span>

            <span className="language-name">
              {language.name}
            </span>

            <button onClick={() => vote(index)}>
              Click Here
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;