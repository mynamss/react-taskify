import { useState } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

import "../styles/TaskFilter.css";

import TaskItem from "./TaskItem";

export default function TaskFilter({tasks, setTasks}) {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <div className="task-filter">
      <div className="task-filter-content">
        <h3>Task Completed</h3>
        <FormControl sx={{ mr: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Filter by</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={selectedFilter}
            label="Filter by"
            onChange={handleChange}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"Today"}>Today</MenuItem>
            <MenuItem value={"This Week"}>This Week</MenuItem>
            <MenuItem value={"This Month"}>This Month</MenuItem>
          </Select>
        </FormControl>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
          />
        ))}
      </ul>
    </div>
  );
}
