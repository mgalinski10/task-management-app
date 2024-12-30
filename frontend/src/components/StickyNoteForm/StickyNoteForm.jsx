import React, { useState } from "react";
import styles from "./StickyNoteForm.module.scss";
import axios from "axios";
import Form from "../Form/Form";
import { useStickyWall } from "../../context/StickyWallContext";
import { useUser } from "../../context/UserContext";

const StickyNoteForm = ({ initialData = {} }) => {
  const { closeForm, fetchNotes } = useStickyWall();
  const { user } = useUser();
  const [title, setTitle] = useState(initialData.title || "");
  const [content, setContent] = useState(initialData.content || "");

  const isEdit = initialData && initialData._id;

  const resetForm = () => {
    setTitle("");
    setContent("");
  };

  const handleDelete = async () => {
    try {
      if (isEdit) {
        await axios.delete(
          `http://localhost:5000/api/notes/${initialData._id}`,
          {
            withCredentials: true,
          }
        );

        resetForm();
        closeForm();
      }
    } catch (error) {
      console.error("Error deleting note:", error);
    } finally {
      fetchNotes();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const note = {
      title,
      content,
      userId: user.id,
    };

    try {
      if (!isEdit) {
        await axios.post("http://localhost:5000/api/notes", note, {
          withCredentials: true,
        });
      } else {
        await axios.put(
          `http://localhost:5000/api/notes/${initialData._id}`,
          note,
          {
            withCredentials: true,
          }
        );
      }

      resetForm();
      closeForm();
    } catch (error) {
      console.error("Error saving note:", error);
    } finally {
      fetchNotes();
    }
  };

  const handleCloseForm = () => {
    closeForm();
  };

  return (
    <Form
      title="Sticky Note"
      isEdit={isEdit}
      actionBtnTitle={"Save note"}
      deleteBtnTitle={"Delete note"}
      onSubmit={handleSubmit}
      onDelete={handleDelete}
      onCloseForm={handleCloseForm}
    >
      <ul className={styles.noteLabels}>
        <li>
          <input
            type="text"
            placeholder="Enter note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </li>
        <li>
          <textarea
            className={styles.content}
            placeholder="Enter note content"
            maxLength="100"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </li>
      </ul>
    </Form>
  );
};

export default StickyNoteForm;
