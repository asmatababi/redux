import React from "react";
import { complited, deleteTask } from "../redux/actions/todoactions";
import { useDispatch } from "react-redux";
const Task = ({ task }) => {
  const { taskName, id, isDone } = task;
  const dispatch = useDispatch();
  const onClicked = () => dispatch(complited(id));
  const onClick = (e) => {
    if (e.target.id === "delete") {
      dispatch(deleteTask(id));
    }
  };
  return (
    <div class="container-md">
      <li
        class="list-group-item"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <span>{taskName}</span>
        <div>
          <i
            class="fa-solid fa-trash-can"
            style={{ border: 1, padding: 5, "border-spacing": 10 }}
            id="delete"
            onClick={onClick}
          ></i>

          <i
            class="fa-regular fa-pen-to-square"
            style={{ border: 1, padding: 5, "border-spacing": 10 }}
          ></i>
          <i
            class="fa-solid fa-square-check"
            style={{ border: 1, padding: 5, "border-spacing": 10 }}
            onClick={onClicked}
          ></i>
        </div>
      </li>
    </div>
  );
};

export default Task;
