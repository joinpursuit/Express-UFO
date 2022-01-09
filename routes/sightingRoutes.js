const express = require('express');
const sightingController = require('../controllers/sightingController');

const router = express.Router();

router
  .route('/')
  .get(sightingController.checkQuery, sightingController.getFilteredSighting);

module.exports = router;
