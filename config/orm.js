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

    insertOne(table, col, val, cb) {
        let queryString = `INSERT INTO ${table}`;
    
        queryString += ' (';
        queryString += col;
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += '?';
        queryString += ') ';
    
        console.log(queryString);
    
        connection.query(queryString, val, (err, result) => {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    },

    updateOne() {
            
    }

};

module.exports = orm;