import { Link, useLocation } from "react-router-dom";
import styles from "./MenuNavigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faNoteSticky,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const MenuItem = ({ title, to, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className={`${styles.itemContainer} ${isActive ? styles.active : ""}`}>
      <Link to={to}>
        <div className={styles.content}>
          <FontAwesomeIcon icon={icon} className={styles.icon} />
          {title}
        </div>
      </Link>
    </li>
  );
};

const MenuNavigation = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.subTitle}>Tasks</h1>
        <ul className={styles.tasks}>
          <MenuItem title="Tasks" to="/" icon={faListCheck} />
          <MenuItem title="Sticky Wall" to="/stickywall" icon={faNoteSticky} />
        </ul>
      </div>
      <div>
        <ul className={styles.userActions}>
          <MenuItem title="Profile" icon={faUser} />
          <MenuItem title="Log out" icon={faRightFromBracket} />
        </ul>
      </div>
    </div>
  );
};

export default MenuNavigation;
