import {useState} from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import {useCookies} from "react-cookie";

export const CreateEntry = () => {
    const userID = useGetUserID();
    const [cookies, _] = useCookies(["access_token"]);

    const [entry, setEntry] = useState({
        title: "",
        date: new Date(),
        imageUrl: "",
        entryText: "",
        vocabList: [],
        userOwner: userID
    });

    const navigate = useNavigate()

    const handleChange = (event) => {
        const {name, value} = event.target;
        setEntry({...entry, [name]: value});
    };

    const handleListChange = (event, idx) => {
        const {value} = event.target;
        const vocabList = entry.vocabList;
        vocabList[idx] = value;
        setEntry({...entry, vocabList});
    };

    const addVocab = () => {
        setEntry({...entry, vocabList: [...entry.vocabList, ""]});
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/entries", entry, {
                headers: {authorization: cookies.access_token}
        });
            alert("Entry Created");
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    }
    return (
    <div className="create-entry">
        <h2>Create Entry</h2>
        <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" onChange={handleChange}/>
            <label htmlFor="vocabList">Vocab List</label>
            {entry.vocabList.map((vocab, idx) => (
                <input 
                key={idx} 
                type="text" 
                name="vocabList" 
                value={vocab} 
                onChange={(event) => handleListChange(event, idx)}/>
            ))}
            <button onClick={addVocab} type="button"> Add Vocab</button>

            <label htmlFor="text">Entry Text</label>
            <textarea id="entryText" name="entryText" onChange={handleChange}/>
            <label htmlFor="imageUrl">Image URL</label>
            <input type="text" id="imageUrl" name="imageUrl" onChange={handleChange}/>
            <button type="submit"> Create Entry</button>
        </form>
    </div>
    )
};