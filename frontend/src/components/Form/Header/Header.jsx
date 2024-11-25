import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { useToday } from "../../../context/TodayContext";

const Header = () => {
  const { closeForm } = useToday();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Task:</h1>
      <FontAwesomeIcon
        className={styles.closeIcon}
        icon={faXmark}
        role="button"
        onClick={closeForm}
      />
    </div>
  );
};

export default Header;
