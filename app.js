//DEPENDENCIES
const express = require('express');
const sightingRouter = require('./routes/sightingRoutes');

//CONFIGURATION
const app = express();
require('dotenv').config();

//MIDDLEWARE
app.use(express.json());
app.use('/', express.static('public'));
//ROUTES
app.use('/api/v1/sightings', sightingRouter);

module.exports = app;
