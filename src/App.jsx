import styles from "./App.module.scss";
import Menu from "./components/Menu/Menu";

const App = () => {
  return (
    <div className={styles.container}>
      <Menu />
    </div>
  );
};

export default App;
