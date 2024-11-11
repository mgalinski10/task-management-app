import styles from "./MainContent.module.scss";
import TaskList from "./TaskList/TaskList";

const Header = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};

const MainContent = () => {
  return (
    <main>
      <Header title="Today" />
      <TaskList />
    </main>
  );
};

export default MainContent;
