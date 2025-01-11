// npm library
import { useContext, useState } from "react";
import { useImmer } from "use-immer";

// components & css
import TaskForm from "../TaskForm";
import TaskList from "../TaskList";
import TaskFilter from "../TaskFilter";
import "../../styles/Content.css";

// context, util
import { useTasks } from "../../context/TaskContext";
import getFullDay from "../../utils/getFullDay";

export default function Content() {
  const { tasks } = useTasks();

  const onProgressTasks = tasks.filter((task) => !task.isDone);
  const completedTasks = tasks.filter((task) => task.isDone);

  return (
    <>
      <div className="content-form">
        <h1>Today</h1>
        <p style={{ fontSize: "0.9rem" }}>{getFullDay()}</p>
        <TaskForm tasks={tasks} />
      </div>
      <div className="content-form">
        <TaskList tasks={onProgressTasks} />
      </div>
      <div className="content-form">
        <TaskFilter tasks={completedTasks} />
      </div>
    </>
  );
}
