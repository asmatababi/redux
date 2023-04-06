import React from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
