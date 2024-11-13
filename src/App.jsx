import styles from "./App.module.scss";
import Menu from "./components/Menu/Menu";
import MainContent from "./components/MainContent/MainContent";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import TaskList from "./components/TaskList/TaskList";

const App = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <MainContent title="Today">
        <TaskList />
      </MainContent>
      <AddTaskForm />
    </div>
  );
};

export default App;
