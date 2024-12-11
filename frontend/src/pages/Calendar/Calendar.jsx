import "./Calendar.scss";
import "@schedule-x/theme-default/dist/index.css";
import { useEffect, useState } from "react";
import axios from "axios";
import AddEventForm from "../../components/AddEventForm/AddEventForm";
import { useCalendar } from "../../context/CalendarContext";
import { viewMonthGrid } from "@schedule-x/calendar";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { createEventModalPlugin } from "@schedule-x/event-modal";

const Calendar = () => {
  const { isOpen, openForm, events, fetchEvents, loadingEvents } =
    useCalendar();

  const eventsService = createEventsServicePlugin();

  useEffect(() => {
    if (!loadingEvents) {
      fetchEvents();
    }
  }, [events]);

  const config = {
    views: [viewMonthGrid],
    events: events,
    plugins: [eventsService, createEventModalPlugin()],
  };

  const calendar = useCalendarApp(config);

  return (
    <div className="calendar-container">
      <section>
        <h1>
          Calendar
          <button className="add-event-btn" onClick={openForm}>
            Add Event
          </button>
        </h1>
        {loadingEvents && <div>Loading calendar...</div>}
        {!isOpen && !loadingEvents && (
          <ScheduleXCalendar
            className="sx-react-calendar-wrapper"
            calendarApp={calendar}
          />
        )}
        {isOpen && <AddEventForm />}
      </section>
    </div>
  );
};

export default Calendar;
