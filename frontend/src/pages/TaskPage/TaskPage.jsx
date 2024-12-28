import styles from "./TaskPage.module.scss";
import TaskList from "../../components/TaskList/TaskList";
import TaskForm from "../../components/TaskForm/TaskForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useTask } from "../../context/TaskContext";

const TaskPage = () => {
  const { isOpen, activeTask } = useTask();

  return (
    <div className={styles.TodayContainer}>
      <section>
        <PageTitle title="Tasks" />
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

export default TaskPage;
