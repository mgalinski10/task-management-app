import AddEventForm from "../../components/AddEventForm/AddEventForm";
import Calendar from "../../components/Calendar/Calendar";
import { useCalendar } from "../../context/CalendarContext";
import "./CalendarPage.scss";

const CalendarPage = () => {
  const { isOpen, openForm, loadingEvents, events } = useCalendar();

  return (
    <div className="calendar-container">
      <section>
        <h1>
          Calendar
          <button className="add-event-btn" onClick={openForm}>
            Add Event
          </button>
        </h1>
        {loadingEvents && <p>Loading events...</p>}
        {!isOpen && !loadingEvents && (
          <Calendar events={events} key={events.length} />
        )}
        {isOpen && <AddEventForm />}
      </section>
    </div>
  );
};

export default CalendarPage;
