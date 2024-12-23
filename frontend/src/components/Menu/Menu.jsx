import styles from "./Menu.module.scss";
import TaskMenu from "./MenuNavigation/MenuNavigation";

const Menu = () => {
  return (
    <nav>
      <h1 className={styles.title}>Menu</h1>
      <TaskMenu />
    </nav>
  );
};

export default Menu;
