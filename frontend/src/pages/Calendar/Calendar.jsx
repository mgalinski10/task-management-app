import "./Calendar.scss";
import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import { createViewMonthGrid, createViewWeek } from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import "@schedule-x/theme-default/dist/index.css";

const Calendar = () => {
  const plugins = [createEventsServicePlugin()];

  const calendar = useCalendarApp(
    {
      views: [
        // createViewDay(),
        createViewWeek(),
        createViewMonthGrid(),
        // createViewMonthAgenda(),
      ],
      events: [
        {
          id: "1",
          title: "Testowy event",
          start: "2024-11-25",
          end: "2024-11-25",
        },
      ],
    },
    plugins
  );

  return (
    <div className="calendar-container">
      <section>
        <h1>Calendar</h1>
        <ScheduleXCalendar
          className="sx-react-calendar-wrapper"
          calendarApp={calendar}
        />
      </section>
    </div>
  );
};

export default Calendar;
