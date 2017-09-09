const mongoConnection = process.env.Mongo_URL || "mongodb://127.0.0.1:27017/profile";
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const Entry = require('../models/Entry');
const express = require('express');
const router = express.Router();


const searchResult = (query, successCallback) => {
    debugger;
    mongoose.connect(mongoConnection);
    Entry.find({query});
};




module.exports = {
    searchResult
};


