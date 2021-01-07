const connection = require('./connection.js');
// Object Relational Mapper (ORM)

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = (ob) => {
    const arr = [];
  
    // Loop through the keys and push the key/value as a string int arr
    for (const key in ob) {
      let value = ob[key];
      // Check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // If string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === 'string' && value.indexOf(' ') >= 0) {
          value = `'${value}'`;
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(`${key}=${value}`);
      }
    }
  
    // Translate array of strings to a single comma-separated string
    return arr.toString();
};

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

    updateOne(table, objColVals, condition, cb) {
        let queryString = `UPDATE ${table}`;
    
        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, (err, result) => {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    },

};

module.exports = orm;