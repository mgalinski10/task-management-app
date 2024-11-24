import styles from "./TaskMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

const TaskMenuItem = ({ title }) => {
  return (
    <li className={styles.taskMenuItem}>
      <div className={styles.itemWrapper}>
        <FontAwesomeIcon icon={faListCheck} className={styles.icon} />
        <p className={styles.itemTitle}>{title}</p>
      </div>
    </li>
  );
};

const TaskMenu = () => {
  return (
    <div className={styles.taskMenuList}>
      <h1 className={styles.title}>Tasks</h1>
      <ul className={styles.listWrapper}>
        <TaskMenuItem title="Today" />
      </ul>
    </div>
  );
};

export default TaskMenu;
