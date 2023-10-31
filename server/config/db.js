import mongoose from 'mongoose';
import 'dotenv/config';

const username = encodeURIComponent(process.env.DB_USERNAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);

const uri = `mongodb+srv://${username}:${password}@cluster0.rjactut.mongodb.net/diary?retryWrites=true&w=majority`;

// Setup items database and record schema
const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected successfully to the database!");
    }
    catch (err) {
        console.log("Database connection failed");
    }
};

export default connectDB;