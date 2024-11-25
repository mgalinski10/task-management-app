import { Link } from "react-router-dom";
import styles from "./TaskMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const TaskMenuItem = ({ title, to, icon }) => {
  return (
    <li className={styles.taskMenuItem}>
      <Link to={to}>
        <div className={styles.itemWrapper}>
          <FontAwesomeIcon icon={icon} className={styles.icon} />
          {title}
        </div>
      </Link>
    </li>
  );
};

const TaskMenu = () => {
  return (
    <div className={styles.taskMenuList}>
      <h1 className={styles.title}>Tasks</h1>
      <ul className={styles.listWrapper}>
        <TaskMenuItem title="Today" to="/" icon={faListCheck} />
        <TaskMenuItem title="Calendar" to="/calendar" icon={faCalendarDays} />
      </ul>
    </div>
  );
};

export default TaskMenu;
