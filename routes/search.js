const express = require('express');
const router = express.Router();
const fs = require('fs');
const searchEngine = require("../helpers/searchEngine")



router.get('/', function (req, res) { 
   const callback = (error, entries) => {
         res.render('search', {
             title: entries.title,
             entries: entries
         });
     }  
     const query = req.params.searchInput;
     searchEngine.searchResult(query, callback);
 });



 

 module.exports = router;