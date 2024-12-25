import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./AddStickyNote.module.scss";
import { useStickyWall } from "../../context/StickyWallContext";

const AddStickyNote = ({ onClick }) => {
  return (
    <div className={styles.container} role="button" onClick={onClick}>
      <FontAwesomeIcon style={{ fontSize: "4em" }} icon={faPlus} />
    </div>
  );
};

export default AddStickyNote;
