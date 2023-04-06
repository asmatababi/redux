import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";
const TaskList = () => {
  const { tasks } = useSelector((state) => state.todoReducer);
  return (
    <ul className="todo-list container">
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </ul>
  );
};

export default TaskList;
