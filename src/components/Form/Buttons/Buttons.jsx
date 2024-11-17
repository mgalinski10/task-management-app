import { useToday } from "../../../context/TodayContext";
import styles from "./Buttons.module.scss";

const Buttons = ({ isEditing }) => {
  const { editingTask, deleteTask } = useToday();

  const handleDelete = (e) => {
    e.preventDefault();

    deleteTask(editingTask.id);
  };
  return (
    <div className={styles.wrapper}>
      {isEditing && (
        <button className={styles.deleteTaskButton} onClick={handleDelete}>
          Delete Task
        </button>
      )}
      <button type="submit">Save task</button>
    </div>
  );
};

export default Buttons;
