import styles from "./StickyNoteForm.module.scss";
import Form from "../Form/Form";
import { useStickyWall } from "../../context/StickyWallContext";

const StickyNoteForm = ({ initialData = {} }) => {
  const { closeForm } = useStickyWall();
  const isEdit = initialData && initialData.id;

  const handleCloseForm = () => {
    closeForm();
  };

  return (
    <Form
      title="Sticky Note"
      isEdit={isEdit}
      actionBtnTitle="Save note"
      deleteBtnTitle="Delete note"
      //   onDelete={handleDelete}
      //   onSubmit={handleSubmit}
      onCloseForm={handleCloseForm}
    >
      <input placeholder="Enter note title" />

      <textarea
        className={styles.content}
        placeholder="Enter note content"
        maxlength="100"
      ></textarea>
    </Form>
  );
};

export default StickyNoteForm;
