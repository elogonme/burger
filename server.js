// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');

// Create an instance of the express app.
const app = express();

// Set the port of our application  
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;



// Start our server so that it can begin listening to client requests.
// Log (server-side) when our server has started
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
