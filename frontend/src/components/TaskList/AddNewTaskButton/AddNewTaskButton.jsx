import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useTask } from "../../../context/TaskContext";
import styles from "./AddNewTaskButton.module.scss";

const AddNewTaskButton = () => {
  const { openForm } = useTask();
  return (
    <button className={styles.buttonWrapper} onClick={openForm}>
      <FontAwesomeIcon icon={faPlus} className={styles.icon} />
      <p>Add New Task</p>
    </button>
  );
};

export default AddNewTaskButton;
