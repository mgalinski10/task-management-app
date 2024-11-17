import styles from "./TaskList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useToday } from "../../context/TodayContext";

import TaskItem from "./TaskItem/TaskItem";

const AddNewTaskButton = () => {
  const { openAddTaskForm } = useToday();
  return (
    <button className={styles.buttonWrapper} onClick={openAddTaskForm}>
      <FontAwesomeIcon icon={faPlus} className={styles.icon} />
      <p>Add New Task</p>
    </button>
  );
};

const TaskList = () => {
  const { tasks } = useToday();

  const addColor = (task) => {
    const priority = task.priority;
    if (priority === "high") {
      return "rgb(255, 103, 86)";
    } else if (priority === "medium") {
      return "rgb(254, 215, 19)";
    } else return "lightgreen";
  };

  return (
    <ul className={styles.listWrapper}>
      <AddNewTaskButton />
      {tasks.map((task) => (
        <TaskItem key={task.id} taskObj={task} color={addColor(task)} />
      ))}
    </ul>
  );
};

export default TaskList;
