import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = ({ title, onCloseForm }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>{title}</h1>
      <FontAwesomeIcon
        className={styles.icon}
        icon={faXmark}
        role="button"
        onClick={onCloseForm}
      />
    </div>
  );
};

export default Header;
