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
    const user = await UserModel.findById(req.body.userOwner);
    try {
        const response = await entry.save();
        user.diaryEntries.push(entry);
        await user.save();
        res.json(response);
    } catch (err) {
        res.json(err)
    }
});

router.get("/diaryEntries/ids/:userID", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userID);
        res.json({diaryEntries: user?.diaryEntries});
    } catch (err) {
        res.json(err);
    }
})

router.get("/diaryEntries/:userID", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userID);
        const diaryEntries = await EntryModel.find({_id: {$in: user.diaryEntries}});
        res.json({diaryEntries});
    } catch (err) {
        res.json(err);
    }
})

export {router as entriesRouter};