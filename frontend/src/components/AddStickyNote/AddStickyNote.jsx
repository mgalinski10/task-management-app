import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./AddStickyNote.module.scss";

const AddStickyNote = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon style={{ fontSize: "4em" }} icon={faPlus} />
    </div>
  );
};

export default AddStickyNote;
