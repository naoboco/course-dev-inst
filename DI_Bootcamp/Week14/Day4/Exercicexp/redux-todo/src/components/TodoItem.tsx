import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  type Todo
} from "../store/todoSlice";
import type { AppDispatch } from "../store/store";

type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
          marginRight: "10px"
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => dispatch(removeTodo(todo.id))}>
        Remove
      </button>
    </div>
  );
}

export default TodoItem;