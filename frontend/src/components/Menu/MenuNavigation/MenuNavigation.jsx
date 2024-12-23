import { Link, useLocation } from "react-router-dom";
import styles from "./MenuNavigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faCalendarDays,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";

const TaskMenuItem = ({ title, to, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className={`${styles.taskMenuItem} ${isActive ? styles.active : ""}`}>
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
        <TaskMenuItem
          title="Sticky Wall"
          to="/stickywall"
          icon={faNoteSticky}
        />
      </ul>
    </div>
  );
};

export default TaskMenu;
