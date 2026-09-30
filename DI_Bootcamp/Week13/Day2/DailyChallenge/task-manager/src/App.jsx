import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import TaskFilter from "./Components/TaskFilter";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <div className="app">
        <h1>Task Manager</h1>

        <TaskForm />

        <TaskFilter />

        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;