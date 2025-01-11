import Content from "../components/base/Content";
import { TaskProvider } from "../context/TaskContext";
export default function Home() {
  return (
    <TaskProvider>
      <Content />
    </TaskProvider>
  );
}
