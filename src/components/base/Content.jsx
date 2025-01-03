import { useState } from "react";
import { useImmer } from "use-immer";

import TaskForm from "../TaskForm";
import TaskList from "../TaskList";
import "../../styles/Content.css";

import getFullDay from "../../utils/getFullDay";

export default function Content() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useImmer([{
    id: 1,
    name: "Learn React",
    isDone: false,
  }]);

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
    </>
  );
}
