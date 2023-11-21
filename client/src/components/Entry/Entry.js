import moment from "moment";
import "./Entry.css";

export const Entry = (props) => {
  let formattedDate = moment(props.data.date).format("MMMM Do YYYY, h:mm:ss a");
  return (
    <div>
      <div className="entry">
        <h1 className="entry-header">{props.data.title}</h1>
        <p className="entry-date">{formattedDate}</p>
        <p className="entry-content">{props.data.entryText}</p>
        <div className="vocab-box">{props.data.vocabList.map((word, index) => (
          <div key={index} className="word">
            {word}
          </div>
        ))}</div>
      </div>
    </div>
  );
};
