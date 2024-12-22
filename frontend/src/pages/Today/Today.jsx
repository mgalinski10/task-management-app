import styles from "./Today.module.scss";
import TaskList from "../../components/TaskList/TaskList";
import TaskForm from "../../components/TaskForm/TaskForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useToday } from "../../context/TodayContext";

const Today = () => {
  const { isOpen, activeTask } = useToday();

  return (
    <div className={styles.container}>
      <section>
        <PageTitle title="Today" />
        <TaskList />
      </section>
      <aside>
        {isOpen && !activeTask && <TaskForm />}
        {isOpen && activeTask && (
          <TaskForm key={activeTask._id} initialData={activeTask} />
        )}
      </aside>
    </div>
  );
};

export default Today;
