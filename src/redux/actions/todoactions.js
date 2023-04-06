import { ADDTASK, DELETETASK, COMPLITED } from "./types";
export const addTask = (newTask) => {
  return { type: ADDTASK, payload: newTask };
};

export const deleteTask = (id) => {
  return { type: DELETETASK, payload: id };
};
export const complited = (id) => {
  return { type: COMPLITED, payload: id };
};
