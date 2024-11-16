import styles from "./AddTaskForm.module.scss";
import { useState } from "react";
import { useToday } from "../../context/TodayContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import TaskDetailsForm from "./TaskDetailsForm/TaskDetailsForm";

const AddTaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("medium");
  const { addTask, closeAddForm } = useToday();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      const task = { name: taskName, priority: priority, date: date };
      addTask(task);
      setTaskName("");
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
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className={styles.taskInput}
      />
      <textarea
        className={styles.taskDescription}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="8"
      />

      <TaskDetailsForm
        date={date}
        priority={priority}
        SetDate={setDate}
        SetPriority={setPriority}
      />

      <div className={styles.buttons}>
        <button type="submit" className={styles.deleteTaskButton}>
          Delete task
        </button>
        <button type="submit">Save task</button>
      </div>
    </form>
  );
};

export default AddTaskForm;
