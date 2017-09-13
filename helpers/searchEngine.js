const mongoConnection = process.env.Mongo_URI || "mongodb://127.0.0.1:27017/faq";
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const Entry = require('../models/Entry');
const express = require('express');
const router = express.Router();


const searchResult = (query, successCallback) => {
    mongoose.connect(mongoConnection);
    Entry.find({
        $text: {
            $search: query,
        }
    }, successCallback);

};

module.exports = {
    searchResult
};


