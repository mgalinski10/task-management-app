import styles from "./Buttons.module.scss";

const Buttons = () => {
  return (
    <div className={styles.wrapper}>
      <button type="submit">Save task</button>
    </div>
  );
};

export default Buttons;
