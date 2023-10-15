import express from 'express';
import cors from 'cors';
import connectDB from '../config/db.js';

const port = 3001;
const app = express();

app.use(express.json()); // converts requests to json
app.use(cors()); // communicates front-end and back-end when using apis

//connectDB();

app.listen(port, () => console.log("Server listening on port " + port));
