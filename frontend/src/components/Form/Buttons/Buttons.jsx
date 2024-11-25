import { useToday } from "../../../context/TodayContext";
import styles from "./Buttons.module.scss";

const Buttons = () => {
  const { isEditing } = useToday();
  return (
    <div className={styles.wrapper}>
      {isEditing && (
        <button className={styles.deleteTaskButton} type="submit">
          Delete task
        </button>
      )}
      <button type="submit">Save task</button>
    </div>
  );
};

export default Buttons;
