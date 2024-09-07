import { Card, ProgressBar } from "@/components";
import { TaskList } from "./components";
import { useTasks } from "./hooks/useTasks";

function Dashboard() {
  const { tasks, loading, error, setTasks } = useTasks();
  const percent = Math.round(
    (tasks.filter((task) => task.isCompleted).length / tasks.length) * 100
  );

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      <h1 className="text-3xl text-center font-semibold">Tareas de Minecraft</h1>
      <Card>
        <Card.Title>Progreso</Card.Title>
        <Card.Body>
          <ProgressBar percent={percent} />
        </Card.Body>
      </Card>
      <Card>
        <Card.Title>Tareas pendientes</Card.Title>
        <Card.Body>
          <TaskList setTasks={setTasks} tasks={tasks} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default Dashboard;
