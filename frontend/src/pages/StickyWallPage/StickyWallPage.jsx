import styles from "./StickyWallPage.module.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import StickyNote from "../../components/StickyNote/StickyNote";
import AddStickyNote from "../../components/AddStickyNote/AddStickyNote";
import StickyNoteForm from "../../components/StickyNoteForm/StickyNoteForm";
import { useStickyWall } from "../../context/StickyWallContext";

const StickyNotesPage = () => {
  const { isOpen, openForm, notes, activeNote } = useStickyWall();

  return (
    <div className={styles.container}>
      <section>
        <PageTitle title="Sticky Wall" />
        {!isOpen && (
          <div className={styles.stickyWall}>
            {notes.map((note) => {
              return (
                <StickyNote
                  key={note._id}
                  title={note.title}
                  content={note.content}
                />
              );
            })}
            <AddStickyNote onClick={openForm} />
          </div>
        )}
        {isOpen && !activeNote && <StickyNoteForm />}
        {isOpen && activeNote && (
          <StickyNoteForm key={activeNote._id} initialData={activeNote} />
        )}
      </section>
    </div>
  );
};

export default StickyNotesPage;
