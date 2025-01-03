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
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const handleEditTask = (id, newInput) => {
    setTasks((draft) => {
      const task = draft.find((task) => task.id === id);
      task.name = newInput;
    });
  };

  return (
    <div>
      <h2>Your Task</h2>
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={handleCheckedTask}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
}
