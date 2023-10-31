import express from 'express';
import cors from 'cors';
import connectDB from '../config/db.js';

import { userRouter } from './routes/users.js';
import { entriesRouter } from './routes/entries.js';

const port = 3001;
const app = express();

app.use(express.json()); // converts requests to json
app.use(cors()); // communicates front-end and back-end when using apis

connectDB();

app.use("/auth", userRouter);
app.use("/entries", entriesRouter);

app.listen(port, () => console.log("Server listening on port " + port));
