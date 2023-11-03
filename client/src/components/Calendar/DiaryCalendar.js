import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CurrentEntry } from "../../pages/CurrentEntry";
import { useNavigate } from "react-router-dom";

export const DiaryCalendar = (props) => {
  const localizer = momentLocalizer(moment);
  const navigate = useNavigate();
  console.log(props.data);

  const events = props.data.map((entry) => ({
    id: entry._id,
    title: entry.title,
    start: new Date(entry.date),
    end: new Date(entry.date),
  }));

  const handleSelectSlot = (e) => {
    console.log(e, "Event data, handle select slot");
  };

  // Go to selected diary entry page
  const handleEventSelection = (e) => {
    let index = props.data.findIndex(x => x._id ===e.id);
    navigate(`/diary-entries/${e.id}`, {replace: false, state:{ data: props.data[index] }});
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
