import styles from "./TaskMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

const TaskItem = ({ title }) => {
  return (
    <li className={styles.taskitem}>
      <div className={styles.itemwrapper}>
        <FontAwesomeIcon icon={faListCheck} className={styles.icon} />
        <p className={styles.itemtitle}>{title}</p>
      </div>
    </li>
  );
};

const TaskMenu = () => {
  return (
    <div className={styles.tasklist}>
      <h1 className={styles.title}>Tasks</h1>
      <ul className={styles.listwrapper}>
        <TaskItem title="Today" />
        <TaskItem title="Today" />
        <TaskItem title="Today" />
      </ul>
    </div>
  );
};

export default TaskMenu;
