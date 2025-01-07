import { useState } from "react";
import { useImmer } from "use-immer";

import TaskForm from "../TaskForm";
import TaskList from "../TaskList";
import "../../styles/Content.css";

import getFullDay from "../../utils/getFullDay";
import TaskFilter from "../TaskFilter";

export default function Content() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useImmer([
    {
      id: 1,
      name: "Learn React",
      isDone: false,
      createdAt: "2021-10-10T10:00:00.000Z",
    },
  ]);

  return (
    <>
      <div className="content-form">
        <h1>Today</h1>
        <p style={{ fontSize: "0.9rem" }}>{getFullDay()}</p>
        <TaskForm
          input={input}
          setInput={setInput}
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
      <div className="content-form">
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
      <div className="content-form">
        <TaskFilter tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}
