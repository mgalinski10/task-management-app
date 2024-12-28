import EventForm from "../../components/EventForm/EventForm";
import Calendar from "../../components/Calendar/Calendar";
import { useCalendar } from "../../context/CalendarContext";
import "./CalendarPage.scss";

const CalendarPage = () => {
  const { isOpen, openForm, loadingEvents, events, activeEvent } =
    useCalendar();

  return (
    <div className="calendar-container">
      <div class="content">
        <div class="header">
          <h1>Calendar</h1>
          <button className="add-event-btn" onClick={openForm}>
            Add Event
          </button>
        </div>

        {loadingEvents && <p>Loading events...</p>}
        {!isOpen && !loadingEvents && (
          <Calendar events={events} key={events.length} />
        )}
        {isOpen && !activeEvent && <EventForm />}
        {isOpen && activeEvent && (
          <EventForm key={activeEvent._id} initialData={activeEvent} />
        )}
      </div>
    </div>
  );
};

export default CalendarPage;
