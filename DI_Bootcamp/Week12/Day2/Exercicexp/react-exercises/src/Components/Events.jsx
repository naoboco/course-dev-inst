import { useState } from "react";

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert("I was clicked");
  };

  const handleKeyDown = event => {
    if (event.key === "Enter") {
      alert(`You typed: ${event.target.value}`);
    }
  };

  const toggleButton = () => {
    setIsToggleOn(prevState => !prevState);
  };

  return (
    <>
      <button onClick={clickMe}>
        Click Me
      </button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Type something and press Enter"
        onKeyDown={handleKeyDown}
      />

      <br />
      <br />

      <button onClick={toggleButton}>
        {isToggleOn ? "ON" : "OFF"}
      </button>
    </>
  );
}

export default Events;