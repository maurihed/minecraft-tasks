import { Checkbox } from "@/components";
import { Task } from "@/types";
import classNames from "classnames";

type Props = {
  task: Task;
  onChecked: (val: boolean) => void;
};
function TaskItem({ task, onChecked }: Props) {
  return (
    <Checkbox
      id={task.id}
      label={
        <span className={classNames({ ["line-through"]: task.isCompleted })}>
          {task.description}
        </span>
      }
      checked={task.isCompleted}
      onChange={onChecked}
    />
  );
}

export default TaskItem;
