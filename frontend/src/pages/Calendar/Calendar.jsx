import "./Calendar.scss";
import { ScheduleXCalendar } from "@schedule-x/react";
import { viewWeek, viewMonthGrid, createCalendar } from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";

import { createEventModalPlugin } from "@schedule-x/event-modal";
import "@schedule-x/theme-default/dist/index.css";

const eventsServicePlugin = createEventsServicePlugin();

const Calendar = () => {
  const plugins = [createEventModalPlugin(), eventsServicePlugin];

  const config = {
    dayBoundaries: {
      start: "06:00",
      end: "18:00",
    },
    callbacks: {
      /**
       * Is called when:
       * 1. Selecting a date in the date picker
       * 2. Selecting a new view
       * */
      onRangeUpdate(range) {
        console.log("new calendar range start date", range.start);
        console.log("new calendar range end date", range.end);
      },

      /**
       * Is called when an event is updated through drag and drop
       * */
      onEventUpdate(updatedEvent) {
        console.log("onEventUpdate", updatedEvent);
      },

      /**
       * Is called when an event is clicked
       * */
      onEventClick(calendarEvent) {
        console.log("onEventClick", calendarEvent);
      },

      /**
       * Is called when an event is double clicked
       * */
      onDoubleClickEvent(calendarEvent) {
        console.log("onDoubleClickEvent", calendarEvent);
      },
    },
    views: [viewWeek, viewMonthGrid],
    weekOptions: {
      gridHeight: 850,
      nDays: 6,
      eventWidth: 90,
      timeAxisFormatOptions: { hour: "2-digit", minute: "2-digit" },
    },
    events: [
      {
        id: "1",
        title: "Testowy event",
        description: "Discuss the new project",
        location: "Starbucks",
        start: "2024-11-25 08:00",
        end: "2024-11-25 09:00",
      },

      {
        id: "2",
        title: "Testowy event",
        description: "Discuss the new project",
        location: "Starbucks",
        start: "2024-11-26 08:00",
        end: "2024-11-26 09:00",
      },
    ],
  };
  const calendar = createCalendar(config, plugins);

  // eventModal.close(); // close the modal

  const wynik = eventsServicePlugin.getAll();
  console.log(wynik);

  return (
    <div className="calendar-container">
      <section>
        <h1>
          Calendar
          <button class="add-event-btn">Add Event</button>
        </h1>
        <ScheduleXCalendar
          className="sx-react-calendar-wrapper"
          calendarApp={calendar}
        />
      </section>
    </div>
  );
};

export default Calendar;
