import { createContext, useContext, useState, useReducer } from "react";
import { useImmerReducer } from "use-immer";

const TaskContext = createContext();

const taskReducer = (draft, action) => {
  switch (action.type) {
    case "ADD_TASK":
      draft.push(action.payload);
      break;
    case "EDIT_TASK":
      const editedTask = draft.find((item) => item.id === action.payload.id);
      if (editedTask) editedTask.name = action.payload.newInput;
      break;
    case "DELETE_TASK":
      return draft.filter((item) => item.id !== action.payload);
    case "TOGGLE_TASK_STATUS":
      const toggledTask = draft.find((item) => item.id === action.payload);
      if (toggledTask) toggledTask.isDone = !toggledTask.isDone;
      break;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export const TaskProvider = ({ children }) => {
  const initState = [];
  const [tasks, dispatch] = useImmerReducer(taskReducer, initState);

  const addTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: task });
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const editTask = (id, newInput) => {
    dispatch({ type: "EDIT_TASK", payload: { id, newInput } });
  };

  const toggleTaskStatus = (id) => {
    dispatch({ type: "TOGGLE_TASK_STATUS", payload: id });
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, editTask, toggleTaskStatus, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
