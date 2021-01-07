const express = require('express');
// Import the model (burger.js) to use its database functions.
const burger = require('../models/burger');

const router = express.Router();

// Create routes and set up logic within those routes.