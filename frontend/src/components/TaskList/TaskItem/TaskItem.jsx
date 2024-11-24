import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import styles from "./TaskItem.module.scss";

const TaskItem = ({ taskObj, color }) => {
  return (
    <li className={styles.itemContainer} role="button">
      <div className={styles.wrapper}>
        <div className={styles.nameWrapper}>
          <input type="checkbox"></input>
          <p>{taskObj.name}</p>
        </div>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <div className={styles.details}>
        <p>
          <span>
            <div
              className={styles.priorityBox}
              style={{ backgroundColor: color }}
            ></div>
          </span>
          {taskObj.priority}
        </p>
        <p>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
          </span>
          {taskObj.date}
        </p>
      </div>
    </li>
  );
};

export default TaskItem;
