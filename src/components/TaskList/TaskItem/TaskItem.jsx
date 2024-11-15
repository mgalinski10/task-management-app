import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./TaskItem.module.scss";

const TaskItem = ({ task }) => {
  return (
    <li className={styles.itemContainer}>
      <div className={styles.wrapper}>
        <input type="checkbox"></input>
        <p>{task}</p>
      </div>

      <FontAwesomeIcon icon={faAngleRight} />
    </li>
  );
};

export default TaskItem;
