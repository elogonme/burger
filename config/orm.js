const connection = require('./connection.js');
// Object Relational Mapper (ORM)

const orm = {
    selectAll(tableInput, cb) {
        const queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, result) => {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },

    insertOne() {

    },

    updateOne() {
            
    }

};

module.exports = orm;