import styles from "./MainContent.module.scss";

const MainContent = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <main>{children}</main>
    </div>
  );
};

export default MainContent;
