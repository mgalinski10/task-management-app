import styles from "./MainContent.module.scss";
import TaskList from "./TaskList/TaskList";

const MainContent = ({ title }) => {
  return (
    <main>
      <h1 className={styles.title}>{title}</h1>
      <TaskList />
    </main>
  );
};

export default MainContent;
