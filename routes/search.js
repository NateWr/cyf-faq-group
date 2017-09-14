const express = require('express');
const router = express.Router();
const searchEngine = require("../helpers/searchEngine")

router.get('/', function (req, res) {
    
    const callback = (error, entries) => {
        if (error) {
            throw (error);
          }
        res.render('search', {
            title: 'Frequenty Asked Questions',
            description: 'Search Results',
            entries: entries
        });
    }
    const query = req.query.searchInput;
    searchEngine.searchResult(query, callback);
});

module.exports = router;