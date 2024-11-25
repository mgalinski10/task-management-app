import styles from "./Today.module.scss";
import TaskList from "../../components/TaskList/TaskList";
import Form from "../../components/Form/Form";
import { useToday } from "../../context/TodayContext";

const Today = () => {
  const { isOpen, activeTask } = useToday();

  return (
    <div className={styles.container}>
      <section>
        <h1>Today</h1>
        <TaskList />
      </section>
      <aside>
        {isOpen && !activeTask && <Form />}
        {isOpen && activeTask && (
          <Form key={activeTask._id} initialData={activeTask} />
        )}
      </aside>
    </div>
  );
};

export default Today;
