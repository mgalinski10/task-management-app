import "@schedule-x/theme-default/dist/index.css";

import { viewMonthGrid } from "@schedule-x/calendar";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import { useCalendar } from "../../context/CalendarContext";

const eventsService = createEventsServicePlugin();

const Calendar = ({ events }) => {
  const { openEditForm } = useCalendar();

  const config = {
    views: [viewMonthGrid],
    events,
    callbacks: {
      onDoubleClickEvent(event) {
        console.log(event);
        openEditForm(event);
      },
    },
    plugins: [eventsService, createEventModalPlugin()],
  };

  const calendar = useCalendarApp(config);
  return (
    <div>
      <ScheduleXCalendar className="calendar" calendarApp={calendar} />
    </div>
  );
};

export default Calendar;
