import { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { DiaryCalendar } from "../components/Calendar/DiaryCalendar";

export const CalendarEntries = () => {
  const [diaryEntries, setDiaryEntries] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchDiaryEntries = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/entries/diaryEntries/${userID}/calendar`
        );
        setDiaryEntries(response.data.diaryEntries);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDiaryEntries();
  }, []);

  return (
    <div>
      <h1>Calendar</h1>
      <DiaryCalendar data={diaryEntries} />
    </div>
  );
};
