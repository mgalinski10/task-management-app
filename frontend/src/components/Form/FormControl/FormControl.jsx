import { useToday } from "../../../context/TodayContext";
import styles from "./FormControl.module.scss";
import axios from "axios";
import Button from "../../Button/Button";

const Buttons = () => {
  const { activeTask, fetchTasks, closeForm } = useToday();

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/tasks/${activeTask._id}`);
    await fetchTasks();
    closeForm();
  };

  return (
    <div className={styles.wrapper}>
      {activeTask && (
        <Button
          backgroundColor="rgb(255, 103, 86)"
          color="white"
          onClick={handleDelete}
        >
          Delete task
        </Button>
      )}
      <Button backgroundColor="rgb(254, 215, 19)" type="submit">
        Save Task
      </Button>
    </div>
  );
};

export default Buttons;
