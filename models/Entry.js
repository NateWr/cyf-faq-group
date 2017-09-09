const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    question: String,
    answer: String,
    helpful: Number,
    unhelpful: Number
});

const Entry = mongoose.model('entries', schema);

module.exports = Entry;