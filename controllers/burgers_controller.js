const express = require('express');
// Import the model (burger.js) to use its database functions.
const burger = require('../models/burger');

const router = express.Router();

// Create routes and set up logic within those routes.
router.get('/', (req, res) => {
    burger.all((data) => {
        
        const hbsObj = {
            burgers: data
        };
        console.log('hbsObject', hbsObj);
        res.render('index', hbsObj);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create('burger_name', req.body.name, (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

// Export routes for server.js to use.
module.exports = router;