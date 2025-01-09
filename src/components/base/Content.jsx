// npm library
import { useState } from "react";
import { useImmer } from "use-immer";

// components & css
import TaskForm from "../TaskForm";
import TaskList from "../TaskList";
import TaskFilter from "../TaskFilter";
import "../../styles/Content.css";

// util
import getFullDay from "../../utils/getFullDay";

export default function Content() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useImmer([]);

  const onProgressTasks = tasks.filter((task) => !task.isDone);
  const completedTasks = tasks.filter((task) => task.isDone);

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
        <TaskList tasks={onProgressTasks} setTasks={setTasks} />
      </div>
      <div className="content-form">
        <TaskFilter tasks={completedTasks} setTasks={setTasks} />
      </div>
    </>
  );
}
