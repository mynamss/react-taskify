import { useState } from "react";
import moment from "moment";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

import "../styles/TaskFilter.css";

import TaskItem from "./TaskItem";

export default function TaskFilter({ tasks }) {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  // Logika untuk memfilter tasks
  const filteredTasks = tasks.filter((task) => {
    if (!task.isDone) return false; // Hanya tampilkan task yang sudah selesai

    const taskDate = moment(task.createdAt, "DD-MM-YYYY HH:mm:ss");
    const today = moment().startOf("day");
    const yesterday = moment().subtract(1, "days").startOf("day");
    const startOfWeek = moment().startOf("week");
    const startOfLastWeek = moment().subtract(1, "weeks").startOf("week");
    const endOfLastWeek = moment().subtract(1, "weeks").endOf("week");
    const startOfMonth = moment().startOf("month");
    const startOfLastMonth = moment().subtract(1, "months").startOf("month");
    const endOfLastMonth = moment().subtract(1, "months").endOf("month");

    if (selectedFilter === "Today") {
      return taskDate.isSame(today, "day");
    } else if (selectedFilter === "Yesterday") {
      return taskDate.isSame(yesterday, "day");
    } else if (selectedFilter === "This Week") {
      return taskDate.isBetween(
        startOfWeek,
        moment().endOf("week"),
        "day",
        "[]"
      );
    } else if (selectedFilter === "Last Week") {
      return taskDate.isBetween(startOfLastWeek, endOfLastWeek, "day", "[]");
    } else if (selectedFilter === "This Month") {
      return taskDate.isBetween(
        startOfMonth,
        moment().endOf("month"),
        "day",
        "[]"
      );
    } else if (selectedFilter === "Last Month") {
      return taskDate.isBetween(startOfLastMonth, endOfLastMonth, "day", "[]");
    }

    // Default: Semua task
    return true;
  });

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
