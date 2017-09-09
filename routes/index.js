const express = require('express');
const router = express.Router();
const fs = require('fs');
const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/faq';
const mongoose = require('mongoose');
const { Schema } = mongoose;
const Entry = require('../models/Entry');

/* GET home page. */
router.get('/', function(req, res, next) {

  /**
   * Define a callback function to render the
   * homepage once the entries have been loaded
   */
  const renderEntries = function(error, entries) {
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
   * Load the entries file
   */
  mongoose.connect(mongoConnection);
    Entry.find({}, renderEntries);
});

module.exports = router;
