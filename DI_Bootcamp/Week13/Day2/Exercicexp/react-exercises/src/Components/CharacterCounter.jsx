import { useRef, useState } from "react";

function CharacterCounter() {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleInput = () => {
    setCount(inputRef.current.value.length);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Exercise 2 - Character Counter</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        onInput={handleInput}
      />

      <p>Characters: {count}</p>
    </div>
  );
}

export default CharacterCounter;