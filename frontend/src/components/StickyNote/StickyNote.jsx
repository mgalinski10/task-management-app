import { useStickyWall } from "../../context/StickyWallContext";
import styles from "./StickyNote.module.scss";

const StickyNote = ({ title, content, noteObj }) => {
  const { openEditForm } = useStickyWall();
  return (
    <div
      class={styles.container}
      role="button"
      onClick={() => openEditForm(noteObj)}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default StickyNote;
