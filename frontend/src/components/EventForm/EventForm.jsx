import styles from "./EventForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useCalendar } from "../../context/CalendarContext";
import { useState } from "react";
import axios from "axios";
import Button from "../Button/Button";

const EventForm = () => {
  const { closeForm, fetchEvents } = useCalendar();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const resetForm = () => {
    setTitle("");
    setLocation("");
    setStart("");
    setEnd("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const eventData = {
      title,
      location,
      start,
      end,
    };

    try {
      await axios.post("http://localhost:5000/api/events", eventData);

      fetchEvents();
      resetForm();
      closeForm();
    } catch (error) {
      console.error("Error creating task:", error);
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
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
      <Button type="submit">Save to Calendar</Button>
    </form>
  );
};

export default EventForm;
