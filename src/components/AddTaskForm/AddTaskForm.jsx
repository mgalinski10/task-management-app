import styles from "./AddTaskFrom.module.scss";

const AddTaskForm = () => {
  return (
    <form>
      <h1 className={styles.header}>Menage Task</h1>
      <input
        type="text"
        placeholder="Name your task.."
        className={styles.taskname}
      />

      <div className={styles.buttons}>
        <button type="submit" className={styles.deletetask}>
          Delete Task
        </button>
        <button type="submit">Save Task</button>
      </div>
    </form>
  );
};

export default AddTaskForm;
