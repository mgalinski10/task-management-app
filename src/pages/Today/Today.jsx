import styles from "./Today.module.scss";
import TaskList from "../../components/TaskList/TaskList";
import AddTaskForm from "../../components/AddTaskForm/AddTaskForm";

import { useToday } from "../../context/TodayContext";

const Today = () => {
  const { isAddForm } = useToday();
  return (
    <div className={styles.container}>
      <section>
        <h1>Today</h1>
        <TaskList />
      </section>
      <aside>{isAddForm && <AddTaskForm />}</aside>
    </div>
  );
};

export default Today;
