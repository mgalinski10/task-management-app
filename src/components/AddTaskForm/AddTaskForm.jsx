import { useState } from "react";
import styles from "./AddTaskForm.module.scss";
import { useTasks } from "../../context/TaskContext";

const AddTaskForm = () => {
  const [task, setTask] = useState("");
  const { addTask } = useTasks();
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
      <h1 className={styles.header}>Task:</h1>
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
