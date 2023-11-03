import { useLocation } from "react-router-dom";
import moment from "moment";

export const CurrentEntry = () => {
  const location = useLocation();
  const data = location.state.data;
  let formattedDate = moment(data.date).format("MMMM Do YYYY, h:mm:ss a");
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{formattedDate}</p>
      <p>{data.entryText}</p>
    </div>
  );
};
