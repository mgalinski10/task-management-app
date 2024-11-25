import { useToday } from "../../../context/TodayContext";
import styles from "./Buttons.module.scss";
import axios from "axios";

const Buttons = () => {
  const { activeTask, fetchTasks, closeForm } = useToday();

  const handleDelete = async () => {
    const response = await axios.delete(
      `http://localhost:5000/api/tasks/${activeTask._id}`
    );
    console.log("Deleted task: ", response.data);
    await fetchTasks();
    closeForm();
  };

  return (
    <div className={styles.wrapper}>
      {activeTask && (
        <button className={styles.deleteTaskButton} onClick={handleDelete}>
          Delete task
        </button>
      )}
      <button type="submit">Save task</button>
    </div>
  );
};

export default Buttons;
