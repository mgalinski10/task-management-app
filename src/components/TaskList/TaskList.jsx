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

  return (
    <ul className={styles.listWrapper}>
      <AddNewTaskButton />
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
