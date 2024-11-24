import styles from "./TaskDetailsForm.module.scss";

const TaskDetailsForm = ({ date, priority, setPriority, setDate }) => {
  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
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
