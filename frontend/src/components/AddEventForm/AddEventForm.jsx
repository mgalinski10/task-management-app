import styles from "./AddEventForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useCalendar } from "../../context/CalendarContext";
import { useState } from "react";

const AddEventForm = () => {
  const { closeForm, addEvent } = useCalendar(); // Wyciągamy addEvent z contextu

  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [location, setLocation] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const resetForm = () => {
    setEventName("");
    setEventDescription("");
    setLocation("");
    setStart("");
    setEnd("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEvent = {
      eventName,
      eventDescription,
      eventLocation: location,
      start,
      end,
    };

    try {
      await addEvent(newEvent); // Dodajemy event do backendu i lokalnego stanu
      resetForm();
      closeForm(); // Zamykamy formularz
    } catch (error) {
      console.error("Error creating event:", error);
    }
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
      <input
        type="text"
        placeholder="Type Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type Event Description"
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type Event Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <ul>
        <li>
          <p>Start</p>
          <input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </li>
        <li>
          <p>End</p>
          <input
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </li>
      </ul>
      <button type="submit">Add to calendar</button>
    </form>
  );
};

export default AddEventForm;
