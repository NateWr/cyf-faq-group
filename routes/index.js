const express = require('express');
const router = express.Router();
const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/faq';
const mongoose = require('mongoose');
const { Schema } = mongoose;
const Entry = require('../models/Entry');

/* GET home page. */
router.get('/', function (req, res, next) {
  /**
   * Define a callback function to render the
   * homepage once the entries have been loaded
   */
  const renderEntries = function (error, entries) {
    if (error) {
      throw error;
    }
    res.render('index', {
      title: 'Frequenty Asked Questions',
      description: 'Search for an answer to your question below.',
      entries: entries
    });
  };

  /**
   * Load the entries file from the database
   */
  mongoose.connect(mongoConnection);
  Entry.find({}, renderEntries);
});

//Raring Route -- Khaled
router.post('/rating', function (req, res, next) {
  const id = req.body.id;
  const helpful = req.body.helpful
  const renderEntries = function (error, entry) {
    if (error) {
      console.log(error);
      res.sendStatus(500)
      return
    }
    res.send(entry)
  };
  mongoose.connect(mongoConnection);
  Entry.findOneAndUpdate(
    { _id: id },
    { $inc: { [helpful ? 'helpful' : 'unhelpful']: 1 } },
    { new: true }
    , renderEntries);
});

module.exports = router;
