import { useState } from "react";
import "../styles/TaskItem.css";
import { IconButton, Checkbox, TextField } from "@mui/material";
import { ClearRounded, Edit, Save } from "@mui/icons-material";
import CenterSnackbar from "./base/SnackBar";

import { useTasks } from "../context/TaskContext";

export default function TaskItem({ task }) {
  const { editTask, toggleTaskStatus, deleteTask } = useTasks();

  const [isEditing, setIsEditing] = useState(false);
  const [newInput, setNewInput] = useState(task.name);
  const [open, setOpen] = useState(false);

  const updateCheckbox = (e) => {
    toggleTaskStatus(task.id, e.target.checked);
  };

  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleEditChange = (e) => {
    setNewInput(e.target.value);
  };

  const handleSave = () => {
    setOpen(true);
    editTask(task.id, newInput);
    setIsEditing(false);
  };

  return (
    <>
      <div className="task-item">
        <div className="detail">
          <Checkbox checked={task.isDone} onChange={updateCheckbox} />
          {isEditing ? (
            <TextField
              fullWidth
              variant="standard"
              value={newInput}
              onChange={handleEditChange}
              onBlur={handleSave}
              onKeyDown={(e) => e.key === "Enter" && handleSave()}
              autoFocus
              size="medium"
            />
          ) : (
            <p>{task.isDone ? <del>{task.name}</del> : task.name}</p>
          )}
        </div>

        <div className="btn-action">
          {isEditing ? (
            <IconButton aria-label="save" onClick={handleSave}>
              <Save />
            </IconButton>
          ) : (
            <IconButton aria-label="edit" onClick={handleEdit}>
              <Edit />
            </IconButton>
          )}
          <IconButton aria-label="delete" onClick={handleDeleteTask}>
            <ClearRounded />
          </IconButton>
        </div>
      </div>
      <CenterSnackbar open={open} setOpen={setOpen} message={"Task updated"} />
    </>
  );
}
