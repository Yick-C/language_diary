import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

export const DiaryCalendar = (props) => {
  const localizer = momentLocalizer(moment);

  const events = props.data.map((entry) => ({
    id: entry._id,
    title: entry.title,
    start: entry.date,
    end: entry.date,
  }));

  const handleSelectSlot = (e) => {
    console.log(e, "Event data");
  };

  const handleEventSelection = (e) => {
    console.log(e, "Event data");
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        onSelectEvent={handleEventSelection}
        onSelectSlot={handleSelectSlot}
        selectable
      />
    </div>
  );
};
