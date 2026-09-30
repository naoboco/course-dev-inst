import { useState } from "react";
import CategorySelector from "./components/CategorySelector";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import CategoryManager from "./components/CategoryManager";

function App() {
  const [selectedCategoryId, setSelectedCategoryId] =
    useState<number>(1);

  return (
    <div>
      <h1>Productivity Tracker</h1>

      <CategorySelector
        selectedCategoryId={selectedCategoryId}
        onCategoryChange={setSelectedCategoryId}
      />

      <AddTask
        selectedCategoryId={selectedCategoryId}
      />

      <TaskList
        selectedCategoryId={selectedCategoryId}
      />

      <CategoryManager />
    </div>
  );
}

export default App;