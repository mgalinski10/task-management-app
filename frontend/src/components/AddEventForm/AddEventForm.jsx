import styles from "./AddEventForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useCalendar } from "../../context/CalendarContext";

const AddEventForm = () => {
  const { closeForm } = useCalendar();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dane będą musiały być wysyłąne do bazy!!
    closeForm();
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>Event:</h1>
        <FontAwesomeIcon
          className={styles.closeIcon}
          icon={faXmark}
          role="button"
          onClick={closeForm}
        />
      </div>
      <input type="text" placeholder="Type Event Name" />
      <input type="text" placeholder="Type Event Description" />
      <input type="text" placeholder="Type Event Location" />
      <ul>
        <li>
          <p>Start</p>
          <input type="date" />
        </li>
        <li>
          <p>End</p>
          <input type="date" />
        </li>
      </ul>

      <button>Add to calendar</button>
    </form>
  );
};

export default AddEventForm;
