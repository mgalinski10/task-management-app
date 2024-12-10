import React, { useState, useEffect } from "react";
import "./Calendar.scss";
import { ScheduleXCalendar } from "@schedule-x/react";
import { viewMonthGrid, createCalendar } from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import "@schedule-x/theme-default/dist/index.css";
import AddEventForm from "../../components/AddEventForm/AddEventForm";
import { useCalendar } from "../../context/CalendarContext";

const eventsServicePlugin = createEventsServicePlugin();

const Calendar = () => {
  const { isOpen, openForm, events, loading } = useCalendar();

  const plugins = [
    createEventModalPlugin(),
    eventsServicePlugin,
    createDragAndDropPlugin(),
  ];

  const config = {
    dayBoundaries: {
      start: "06:00",
      end: "18:00",
    },
    callbacks: {
      onEventUpdate(updatedEvent) {
        console.log("onEventUpdate", updatedEvent);
      },
      onEventClick(calendarEvent) {
        console.log("onEventClick", calendarEvent);
      },
    },
    views: [viewMonthGrid],
    weekOptions: {
      gridHeight: 850,
      nDays: 6,
      eventWidth: 90,
      timeAxisFormatOptions: { hour: "2-digit", minute: "2-digit" },
    },
    events: events,
  };

  const calendar = createCalendar(config, plugins);

  if (loading) {
    return <div>Loading events...</div>; // Komunikat ładowania
  }

  return (
    <div className="calendar-container">
      <section>
        <h1>
          Calendar
          <button className="add-event-btn" onClick={openForm}>
            Add Event
          </button>
        </h1>
        {!isOpen && (
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
