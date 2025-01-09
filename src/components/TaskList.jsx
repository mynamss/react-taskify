import TaskItem from "./TaskItem";

import "../styles/TaskList.css";

export default function TaskList({ tasks, setTasks }) {
  const handleCheckedTask = (id, isChecked) => {
    setTasks((draft) => {
      const task = draft.find((task) => task.id === id);
      task.isDone = isChecked;
    });
  };

  const handleDeleteTask = (id) => {
    setTasks((draft) => {
      return draft.filter((task) => task.id !== id);
    });
  };

  const handleEditTask = (id, newInput) => {
    setTasks((draft) => {
      const task = draft.find((task) => task.id === id);
      task.name = newInput;
    });
  };

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
            <TaskItem
              key={task.id}
              task={task}
              onChange={handleCheckedTask}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
