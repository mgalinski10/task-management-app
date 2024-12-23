import styles from "./StickyNote.module.scss";

const StickyNote = ({ title, content }) => {
  return (
    <div class={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default StickyNote;
