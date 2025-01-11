import TaskItem from "./TaskItem";
import { useTasks } from "../context/TaskContext";

import "../styles/TaskList.css";

export default function TaskList({ tasks }) {
  return (
    <div>
      <h3>On Progress Tasks</h3>
      {tasks.length === 0 ? (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "1.5rem 0rem 0rem 0rem",
            opacity: 0.5,
          }}
        >
          <i>Tidak ada task saat ini. Ayo tambahkan</i>
        </p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
}
