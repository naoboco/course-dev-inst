import DatePicker from "./components/DatePicker";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <h1>Daily Planner</h1>

      <DatePicker />

      <AddTask />

      <TaskList />
    </div>
  );
}

export default App;