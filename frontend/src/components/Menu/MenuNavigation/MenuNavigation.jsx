import { Link, useLocation } from "react-router-dom";
import styles from "./MenuNavigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faCalendarDays,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";

const MenuItem = ({ title, to, icon }) => {
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

const MenuNavigation = () => {
  return (
    <div className={styles.taskMenuList}>
      <h1 className={styles.title}>Tasks</h1>
      <ul className={styles.listWrapper}>
        <MenuItem title="Today" to="/today" icon={faListCheck} />
        <MenuItem title="Calendar" to="/calendar" icon={faCalendarDays} />
        <MenuItem title="Sticky Wall" to="/stickywall" icon={faNoteSticky} />
      </ul>
    </div>
  );
};

export default MenuNavigation;
