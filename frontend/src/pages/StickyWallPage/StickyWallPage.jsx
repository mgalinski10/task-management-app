import styles from "./StickyWallPage.module.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import StickyNote from "../../components/StickyNote/StickyNote";
import AddStickyNote from "../../components/AddStickyNote/AddStickyNote";
import StickyNoteForm from "../../components/StickyNoteForm/StickyNoteForm";
import { useStickyWall } from "../../context/StickyWallContext";

const StickyNotesPage = () => {
  const { isOpen, openForm } = useStickyWall();

  const handleClick = () => {
    openForm();
  };
  return (
    <div className={styles.container}>
      <section>
        <PageTitle title="Sticky Wall" />
        {!isOpen && (
          <div className={styles.stickyWall}>
            <StickyNote
              title="Social Media"
              content="Social media platforms like Facebook, Instagram, and Twitter allow people to connect, share ideas, and build communities. Remember to use them wisely and maintain a balance between online and offline life."
            />
            <AddStickyNote onClick={handleClick} />
          </div>
        )}
        {isOpen && <StickyNoteForm />}
      </section>
    </div>
  );
};

export default StickyNotesPage;
