const express = require('express');
const DoctorsController = require('../controllers/DoctorsController');
const { authenticate } = require('../helpers');

const router = express.Router();

// Create a new service
router.post('/', authenticate ,DoctorsController.createDoctor);

// Get all services
router.get('/', authenticate, DoctorsController.getDoctors);
router.get('/:id',authenticate,DoctorsController.getDoctorsById);

// router.put('/:id', authenticate, serviceController.putService);
// router.delete('/:id', authenticate, serviceController.deleteService);

module.exports = router;
