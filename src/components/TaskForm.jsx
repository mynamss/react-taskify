import { useState } from "react";
import "../styles/TaskForm.css";

export default function TaskForm() {
  const [input, setInput] = useState("");

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) {
      alert("Task cannot be empty!");
      return;
    }
    console.log("Task added:", input);
    alert("Task added: " + input);
    setInput("");
  }

  return (
    <div>
      <form className="task-form" onSubmit={handleSubmit}>
        <button className="btn-add" type="submit">
          Add
        </button>
        <input
          className="form-input"
          type="text"
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
