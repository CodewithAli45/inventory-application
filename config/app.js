const express = require('express');
const cors = require('cors');
const dbConnection = require('./db');
const app = express();

app.use(express.json());


dbConnection();

module.exports = app;