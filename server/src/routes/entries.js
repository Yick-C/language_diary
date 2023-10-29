import express from 'express';
import mongoose from 'mongoose'
import { EntryModel } from "../models/Entries.js";
import { UserModel } from "../models/Users.js";
import { verifyToken } from "./users.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await EntryModel.find({});
        res.json(response);
    } catch (err) {
        res.json(err)
    }
});

router.post("/", verifyToken, async (req, res) => {
    const entry = new EntryModel(req.body)
    try {
        const response = await entry.save();
        res.json(response);
    } catch (err) {
        res.json(err)
    }
});

router.put("/", verifyToken, async (req, res) => {
    try {
        const entry = await EntryModel.findById(req.body.entryID);
        const user = await UserModel.findById(req.body.userID);
        user.savedEntries.push(entry);
        await user.save();
        res.json({savedEntries: user.savedEntries});
    } catch (err) {
        res.json(err)
    }
});

export {router as entriesRouter};