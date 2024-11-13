import styles from "./AddTaskForm.module.scss";

const AddTaskForm = () => {
  return (
    <form>
      <h1 className={styles.header}>Task:</h1>
      <input
        type="text"
        placeholder="Enter task name"
        className={styles.taskInput}
      />
      <textarea
        className={styles.taskDescription}
        placeholder="Description"
        rows="8"
      />

      <div className={styles.buttons}>
        <button type="submit" className={styles.deleteTaskButton}>
          Delete Task
        </button>
        <button type="submit">Add task</button>
      </div>
    </form>
  );
};

export default AddTaskForm;
