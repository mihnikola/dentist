const express = require('express');
const HomeController = require('../controllers/HomeController');
const { authenticate } = require('../helpers');

const router = express.Router();

// Create a new service
router.get('/',authenticate, HomeController.getHomeData);

module.exports = router;
