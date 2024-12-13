import styles from "./Button.module.scss";

const Button = ({ children, type, backgroundColor, color, onClick }) => {
  return (
    <button
      className={styles.button}
      style={{ backgroundColor, color }}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
