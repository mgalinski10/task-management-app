import styles from "./EventForm.module.scss";
import axios from "axios";
import { useState } from "react";
import { useCalendar } from "../../context/CalendarContext";
import Form from "../Form/Form";

const EventForm = ({ initialData = {} }) => {
  const { closeForm, fetchEvents } = useCalendar();
  const [title, setTitle] = useState(initialData.title || "");
  const [location, setLocation] = useState(initialData.location || "");
  const [start, setStart] = useState(initialData.start || "");
  const [end, setEnd] = useState(initialData.end || "");

  const resetForm = () => {
    setTitle("");
    setLocation("");
    setStart("");
    setEnd("");
  };

  const isEdit = initialData && initialData.id;

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/events/${initialData.id}`);
      await fetchEvents();
      resetForm();
      closeForm();
    } catch (error) {
      console.error("Error deleting Event:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const event = {
      title,
      location,
      start,
      end,
    };

    try {
      if (!initialData.id) {
        await axios.post("http://localhost:5000/api/events", event);

        resetForm();
      } else {
        await axios.put(
          `http://localhost:5000/api/events/${initialData.id}`,
          event
        );
      }
      await fetchEvents();
      closeForm();
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const handleCloseForm = () => {
    closeForm();
  };

  return (
    <Form
      title="Event"
      isEdit={isEdit}
      actionBtnTitle="Save Event"
      deleteBtnTitle="Delete Event"
      onSubmit={handleSubmit}
      onDelete={handleDelete}
      onCloseForm={handleCloseForm}
    >
      <ul className={styles.eventLabels}>
        <li>
          <p>Name</p>
          <input
            type="text"
            placeholder="Type Event Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </li>
        <li>
          <p>Location</p>
          <input
            type="text"
            placeholder="Type Event Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </li>
        <li>
          <p>Start</p>
          <input
            className={styles.dateInput}
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </li>
        <li>
          <p>End</p>
          <input
            className={styles.dateInput}
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </li>
      </ul>
    </Form>
  );
};

export default EventForm;
