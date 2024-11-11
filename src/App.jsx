import styles from "./App.module.scss";
import Menu from "./components/Menu/Menu";
import MainContent from "./components/MainContent/MainContent";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";

const App = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <MainContent title="Today" />
      <AddTaskForm />
    </div>
  );
};

export default App;
