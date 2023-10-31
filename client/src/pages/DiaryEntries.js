import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

export const DiaryEntries = () => {
  const [diaryEntries, setDiaryEntries] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchDiaryEntries = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/entries/diary-entries/${userID}`
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
      <h1>Diary Entries</h1>
    </div>
  );
};