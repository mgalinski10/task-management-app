import styles from "./App.module.scss";
import Menu from "./components/Menu/Menu";
import MainContent from "./components/MainContent/MainContent";

const App = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <MainContent title="Today" />
    </div>
  );
};

export default App;
