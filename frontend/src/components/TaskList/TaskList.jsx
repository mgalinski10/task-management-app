import styles from "./TaskList.module.scss";
import TaskItem from "./TaskItem/TaskItem";
import AddNewTaskButton from "./AddNewTaskButton/AddNewTaskButton";
import { useEffect } from "react";
import { useTask } from "../../context/TaskContext";

const TaskList = () => {
  const { tasks, fetchTasks } = useTask();

  useEffect(() => {
    fetchTasks();
  }, []);

  const adjustColor = (task) => {
    const priority = task.priority;

    if (priority === "high") {
      return "salmon";
    } else if (priority === "medium") {
      return "rgb(254, 215, 19)";
    } else return "lightgreen";
  };

  return (
    <ul className={styles.listWrapper}>
      <AddNewTaskButton />
      {tasks.map((task) => (
        <TaskItem key={task._id} taskObj={task} color={adjustColor(task)} />
      ))}
    </ul>
  );
};

export default TaskList;
