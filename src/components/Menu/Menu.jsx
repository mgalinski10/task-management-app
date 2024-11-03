import styles from "./Menu.module.scss";
import TaskList from "./TaskList/TaskList";

const Menu = () => {
  return (
    <nav>
      <h1 className={styles.title}>Menu</h1>
      <TaskList />
    </nav>
  );
};

export default Menu;
