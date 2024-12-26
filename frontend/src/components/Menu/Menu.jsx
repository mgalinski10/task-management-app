import styles from "./Menu.module.scss";
import MenuNavigation from "./MenuNavigation/MenuNavigation";

const Menu = () => {
  return (
    <nav>
      <h1 className={styles.title}>Menu</h1>
      <MenuNavigation />
    </nav>
  );
};

export default Menu;
