import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/todoactions";

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const onTaskChanged = (event) => setTask(event.target.value);
  const onTaskCliked = () => {
    if (task === "") {
      alert("Please enter a task name");
    } else {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        taskName: task,
        isDone: false,
      };

      dispatch(addTask(newTask));
      setTask("");
    }
  };

  return (
    <div style={{ padding: 70 }}>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Task Name "
          aria-label="Task Name"
          aria-describedby="button-addon2"
          value={task}
          onChange={onTaskChanged}
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={onTaskCliked}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;
