import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import type { AppDispatch } from "../store/store";

function AddTodo() {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!text.trim()) {
      return;
    }

    dispatch(addTodo(text.trim()));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={text}
        onChange={event => setText(event.target.value)}
      />

      <button type="submit">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;