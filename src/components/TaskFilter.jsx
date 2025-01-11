import { useState } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

import { useTasks } from "../context/TaskContext";
import TaskItem from "./TaskItem";
import "../styles/TaskFilter.css";
import dateFilter from "../utils/dateFilter";

export default function TaskFilter({ tasks }) {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const filteredTasks = dateFilter(tasks, selectedFilter);

  return (
    <div className="task-filter">
      <div className="task-filter-content">
        <h3>Completed Tasks</h3>
        <FormControl sx={{ mr: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Filter by</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={selectedFilter}
            label="Filter by"
            onChange={handleChange}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Today">Today</MenuItem>
            <MenuItem value="Yesterday">Yesterday</MenuItem>
            <MenuItem value="This Week">This Week</MenuItem>
            <MenuItem value="Last Week">Last Week</MenuItem>
            <MenuItem value="This Month">This Month</MenuItem>
            <MenuItem value="Last Month">Last Month</MenuItem>
          </Select>
        </FormControl>
      </div>
      <ul className="task-list">
        {filteredTasks.length === 0 ? (
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "1.5rem 0rem 0rem 0rem",
              opacity: 0.5,
            }}
          >
            <i>Tidak ada task yang sesuai dengan filter</i>
          </p>
        ) : (
          filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </ul>
    </div>
  );
}
