import { useState } from "react";
import styles from "./AddTaskForm.module.scss";
import { useToday } from "../../context/TodayContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const AddTaskForm = () => {
  const [task, setTask] = useState("");
  const { addTask, closeAddForm } = useToday();
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      console.log(task);
      setTask("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.header}>Task:</h1>
        <FontAwesomeIcon
          icon={faXmark}
          role="button"
          className={styles.closeIcon}
          onClick={closeAddForm}
        />
      </div>

      <input
        type="text"
        placeholder="Enter task name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className={styles.taskInput}
      />
      <textarea
        className={styles.taskDescription}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="8"
      />

      <div className={styles.buttons}>
        <button type="submit" className={styles.deleteTaskButton}>
          Delete Task
        </button>
        <button type="submit">Save task</button>
      </div>
    </form>
  );
};

export default AddTaskForm;
