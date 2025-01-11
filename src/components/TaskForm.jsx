import { useState } from "react";
import "../styles/TaskForm.css";
import moment from "moment";
import { IconButton, TextField } from "@mui/material";
import { AddBox } from "@mui/icons-material";

import { useTasks } from "../context/TaskContext";

export default function TaskForm({tasks}) {
  const [input, setInput] = useState("");
  const { addTask } = useTasks();

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim()) {
      addTask({
        id: tasks.length + 1,
        name: input,
        isDone: false,
        createdAt: moment().format("DD-MM-YYYY HH:mm:ss"),
      });
      setInput("");
    }
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="input-list">
        <IconButton type="submit" aria-label="add">
          <AddBox />
        </IconButton>
        <TextField
          id="standard-basic"
          fullWidth
          variant="standard"
          value={input}
          onChange={handleInputChange}
          placeholder="Add your task here..."
        />
      </div>
    </form>
  );
}
