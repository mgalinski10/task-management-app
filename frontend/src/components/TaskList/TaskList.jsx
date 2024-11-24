import styles from "./TaskList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import TaskItem from "./TaskItem/TaskItem";

const AddNewTaskButton = () => {
  return (
    <button className={styles.buttonWrapper}>
      <FontAwesomeIcon icon={faPlus} className={styles.icon} />
      <p>Add New Task</p>
    </button>
  );
};

const TaskList = () => {
  return (
    <ul className={styles.listWrapper}>
      <AddNewTaskButton />
    </ul>
  );
};

export default TaskList;
