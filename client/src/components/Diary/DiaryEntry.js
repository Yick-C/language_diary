import "./DiaryEntry.css";
import moment from "moment";
import { Link  } from "react-router-dom";

const DiaryEntry = ({ date, title, imageUrl, content, vocabList }) => {
  let formattedDate = moment(date).format("MMMM Do YYYY, h:mm:ss a");

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
        <img src={imageUrl} alt="" />
      </div>

      <div className="diary-entry-header">
        <h2 className="diary-entry-title">{title}</h2>
        <p className="diary-entry-date">{formattedDate}</p>
      </div>
      <p className="diary-entry-content">{shortenText(content)}</p>
      <div className="word-box">
          {vocabList.map((word, index) => (
            <div key={index} className="word">
              {word}
            </div>
          ))}
        </div>    
    </div>
  );
};

export default DiaryEntry;
