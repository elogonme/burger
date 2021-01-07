const orm = require('./config/orm.js');

// TO DO create the code that will call the ORM functions using burger specific input for the ORM.

const burger = {
    all(cb) {
      orm.selectAll('burgers', (res) => cb(res));
    },
    // The variables cols and vals are arrays.
    create(cols, vals, cb) {
      orm.insertOne('burgers', cols, vals, (res) => cb(res));
    },
  
    update(objColVals, condition, cb) {
      orm.updateOne('burgers', objColVals, condition, (res) => cb(res));
    },
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = cat;