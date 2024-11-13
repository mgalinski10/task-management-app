import styles from "./TaskList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useTasks } from "../../context/TaskContext";

const AddNewTaskButton = () => {
  return (
    <button className={styles.buttonWrapper}>
      <FontAwesomeIcon icon={faPlus} className={styles.icon} />
      <p>Add New Task</p>
    </button>
  );
};

const TaskItem = ({ task }) => {
  return (
    <li className={styles.itemwrapper}>
      <input type="checkbox"></input>
      <p>{task}</p>
    </li>
  );
};

const TaskList = () => {
  const { tasks } = useTasks();
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
