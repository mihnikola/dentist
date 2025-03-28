const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const { authenticate } = require('../helpers');

const router = express.Router();

// Create a new service
router.post('/',authenticate, CategoryController.createCategory);

module.exports = router;
