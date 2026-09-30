import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector(
    (state: RootState) => state.todos.todos
  );

  return (
    <div>
      <h2>Todo List</h2>

      {todos.length === 0 ? (
        <p>No todos yet</p>
      ) : (
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;