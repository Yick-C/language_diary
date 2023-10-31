import mongoose from "mongoose";

const EntrySchema = new mongoose.Schema({
    title: {type: String, required: true},
    date: {type: Date, required: true},
    imageUrl: {type: String},
    entryText: {type: String, required: true},
    vocabList: [{type: String}],
    userOwner: {type: mongoose.Schema.Types.ObjectId, ref: "users", required:true}
});

export const EntryModel = mongoose.model("entries", EntrySchema);