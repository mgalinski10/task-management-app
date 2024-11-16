import { useToday } from "../../../context/TodayContext";
import styles from "./TaskDetailsForm.module.scss";

const TaskDetailsForm = ({ date, priority, SetPriority, SetDate }) => {
  const handlePriorityChange = (e) => {
    SetPriority(e.target.value);
  };

  const handleDateChange = (e) => {
    SetDate(e.target.value);
  };
  return (
    <ul className={styles.wrapper}>
      <li className={styles.item}>
        <p>Priority</p>
        <select value={priority} onChange={handlePriorityChange}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </li>
      <li className={styles.item}>
        <p>Due date</p>
        <input type="date" value={date} onChange={handleDateChange} />
      </li>
    </ul>
  );
};

export default TaskDetailsForm;
