// components & css
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import TaskFilter from "../components/TaskFilter";
import Header from "../components/base/Header";
import "../styles/Home.css";

// context, util
import { useTasks } from "../context/TaskContext";
import getFullDay from "../utils/getFullDay";

export default function Home() {
  const { tasks } = useTasks();

  const onProgressTasks = tasks.filter((task) => !task.isDone);
  const completedTasks = tasks.filter((task) => task.isDone);
  return (
    <div className="content-container">
      <Header />
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
    </div>
  );
}
