import { useEffect, useState } from "react";
import axios from 'axios'
import { useGetUserID } from "../hooks/useGetUserID";
import {useCookies} from "react-cookie";
import moment from 'moment';

export const Home = () => {
    const [diaryEntries, setDiaryEntries] = useState([]);
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

    return (
        <div>
            <h1>Today is {moment().format('dddd Do MMMM')} </h1>
            <ul>
                {diaryEntries.map((entry) => (
                    <li key={entry._id}>
                        <div>
                            <h2>{entry.title}</h2>
                        </div>
                        <div className="entryText">
                            <p>{entry.entryText}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};