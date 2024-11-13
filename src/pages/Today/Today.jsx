import styles from "./Today.module.scss";
import TaskList from "../../components/TaskList/TaskList";
import AddTaskForm from "../../components/AddTaskForm/AddTaskForm";
import { TaskProvider } from "../../context/TaskContext";

const Today = () => {
  return (
    <TaskProvider>
      <div className={styles.container}>
        <section>
          <h1>Today</h1>
          <TaskList />
        </section>
        <aside>
          <AddTaskForm />
        </aside>
      </div>
    </TaskProvider>
  );
};

export default Today;
