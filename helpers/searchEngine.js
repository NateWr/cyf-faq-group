const mongoose = require('mongoose');
const { Schema } = mongoose;
const Entry = require('../models/Entry');
const mongoConnection = process.env.MONGODB_URI ||'mongodb://localhost:27017/faq';

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


