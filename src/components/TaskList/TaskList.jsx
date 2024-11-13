import styles from "./TaskList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddNewTaskButton = () => {
  return (
    <button className={styles.buttonWrapper}>
      <FontAwesomeIcon icon={faPlus} className={styles.icon} />
      <p>Add New Task</p>
    </button>
  );
};

const TaskItem = ({ children }) => {
  return (
    <li className={styles.itemwrapper}>
      <input type="checkbox"></input>
      <p>{children}</p>
    </li>
  );
};

const TaskList = () => {
  return (
    <ul className={styles.listWrapper}>
      <AddNewTaskButton />
      <TaskItem>Learn math</TaskItem>
      <TaskItem>Learn math</TaskItem>
    </ul>
  );
};

export default TaskList;
