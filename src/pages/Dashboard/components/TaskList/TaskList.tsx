import { Task } from "@/types";
import { TaskItem } from "../TaskItem";
import { useEditTask } from "../../hooks/useEditTask";

type Props = {
  setTasks: (tasks: Task[]) => void;
  tasks: Task[];
};
function TaskList({ setTasks, tasks }: Props) {
  const { editTask } = useEditTask((editedTask: Task) => {
    setTasks(tasks.map((task) => (task.id === editedTask.id ? editedTask : task)));
  });

  return (
    <ul className="grid grid-cols-1 gap-4">
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem
            task={task}
            onChecked={(isChecked) => editTask({ ...task, isCompleted: isChecked })}
          />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
