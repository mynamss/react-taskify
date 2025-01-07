import { useState } from "react";
import "../styles/TaskItem.css";
import { IconButton, Checkbox, Divider, TextField } from "@mui/material";
import { ClearRounded, Edit, Save } from "@mui/icons-material";
import CenterSnackbar from "./base/SnackBar";

export default function TaskItem({ task, onChange, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newInput, setNewInput] = useState(task.name);
  const [open, setOpen] = useState(false);

  const updateCheckbox = (e) => {
    onChange(task.id, e.target.checked);
  };

  const deleteTask = () => {
    onDelete(task.id);
  };

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleEditChange = (e) => {
    setNewInput(e.target.value);
  };

  const handleSave = () => {
    setOpen(true);
    onEdit(task.id, newInput);
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
          <IconButton aria-label="delete" onClick={deleteTask}>
            <ClearRounded />
          </IconButton>
        </div>
      </div>
      <CenterSnackbar open={open} setOpen={setOpen} message={"Task berhasil diupdate"} />
    </>
  );
}
