import { useState } from "react";
import "../styles/TaskForm.css";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import { AddBox } from "@mui/icons-material";

export default function TaskForm({ input, setInput, tasks, setTasks }) {
  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) {
      alert("Task cannot be empty!");
      return;
    }
    setTasks((draft) => {
      draft.push({ id: tasks.length + 1, name: input, isDone: false });
    });
    setInput("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="input-list">
        {/* <button className="btn-add" type="submit">
          Add
        </button> */}
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
        {/* <input
          className="form-input"
          type="text"
          placeholder="Add your task here..."
          value={input}
          onChange={handleInputChange}
        /> */}
      </div>
    </form>
  );
}
