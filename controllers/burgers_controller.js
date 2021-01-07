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

router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
  
    console.log('condition', condition);
  
    burger.update(
      {
        devoured: req.body.devoured,
      },
      condition,
      (result) => {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so send 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
    
});

router.delete('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
  
    console.log('condition', condition);
  
    burger.delete(
      condition,
      (result) => {
        if (result.affectedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });
  

// Export routes for server.js to use.
module.exports = router;