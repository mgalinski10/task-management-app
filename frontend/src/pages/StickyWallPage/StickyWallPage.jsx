import styles from "./StickyWallPage.module.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import StickyNote from "../../components/StickyNote/StickyNote";
import AddStickyNote from "../../components/AddStickyNote/AddStickyNote";
import StickyNoteForm from "../../components/StickyNoteForm/StickyNoteForm";
import { useStickyWall } from "../../context/StickyWallContext";
import { useEffect } from "react";

const StickyNotesPage = () => {
  const { isOpen, openForm, activeNote, fetchNotes, notes } = useStickyWall();

  useEffect(() => {
    fetchNotes();
  }, []);

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
                  noteObj={note}
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
