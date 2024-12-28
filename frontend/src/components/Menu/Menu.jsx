import styles from "./Menu.module.scss";
import MenuNavigation from "./MenuNavigation/MenuNavigation";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Menu</h1>
      <MenuNavigation />
    </div>
  );
};

export default Menu;
