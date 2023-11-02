import "./DiaryEntry.css";
import moment from "moment";
import { Link } from "react-router-dom";

const DiaryEntry = (props) => {
  let formattedDate = moment(props.data.date).format("MMMM Do YYYY, h:mm:ss a");

  function shortenText(str) {
    if (str.length > 30) {
      return str.substring(0, 30) + "...";
    } else {
      return str;
    }
  }

  return (
    <div className="diary-entry">
      <div className="diary-entry-img">
        <img src={props.data.imageUrl} alt="" />
      </div>

      <div className="diary-entry-header">
        <h2 className="diary-entry-title">{props.data.title}</h2>
        <p className="diary-entry-date">{formattedDate}</p>
      </div>
      <p className="diary-entry-content">
        {shortenText(props.data.entryText)}
        <Link
          to={`/diary-entries/${props.data._id}`}
          state={{ data: props.data }}
          className="diary-entry-content-link"
        >
          Read More
        </Link>
      </p>
      <div className="word-box">
        {props.data.vocabList.map((word, index) => (
          <div key={index} className="word">
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiaryEntry;
