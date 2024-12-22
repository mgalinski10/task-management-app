import EventForm from "../../components/EventForm/EventForm";
import Calendar from "../../components/Calendar/Calendar";
import { useCalendar } from "../../context/CalendarContext";
import "./CalendarPage.scss";
import PageTitle from "../../components/PageTitle/PageTitle";

const CalendarPage = () => {
  const { isOpen, openForm, loadingEvents, events, activeEvent } =
    useCalendar();

  return (
    <div className="calendar-container">
      <section>
        <h1>
          Calendar
          <button className="add-event-btn" onClick={openForm}>
            Add Event
          </button>
        </h1>
        {/* <PageTitle title="Calendar"></PageTitle> */}
        {loadingEvents && <p>Loading events...</p>}
        {!isOpen && !loadingEvents && (
          <Calendar events={events} key={events.length} />
        )}
        {isOpen && !activeEvent && <EventForm />}
        {isOpen && activeEvent && (
          <EventForm key={activeEvent._id} initialData={activeEvent} />
        )}
      </section>
    </div>
  );
};

export default CalendarPage;
