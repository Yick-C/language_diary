import { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useCookies } from "react-cookie";
import moment from "moment";

import DiaryEntry from "../components/Diary/DiaryEntry";

export const Home = () => {
  const [diaryEntries, setDiaryEntries] = useState([]);
  const [showMore, setShowMore] = useState(3);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchDiaryEntries = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/entries/diaryEntries/${userID}`
        );
        setDiaryEntries(response.data.diaryEntries);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDiaryEntries();
  }, []);

  const handleShowMore = () => {
    setShowMore(showMore + 3);
  };

  return (
    <div>
      <h1>Today is {moment().format("dddd Do MMMM")} </h1>
      {diaryEntries.slice(0, showMore).map((entry) => (
        <DiaryEntry data={entry} />
      ))}
      {showMore < diaryEntries.length && (
        <button onClick={handleShowMore}>Show More</button>
      )}
    </div>
    
  );
};
