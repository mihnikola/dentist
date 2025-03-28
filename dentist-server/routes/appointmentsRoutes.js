const express = require('express');
const AppointmentsController = require('../controllers/AppointmentsController');
const { authenticate } = require('../helpers');

const router = express.Router();

// Create a new service
router.post('/', authenticate ,AppointmentsController.createAppointments);
router.get('/', authenticate, AppointmentsController.getAppointments);

// // Get all services
// router.put('/:id', authenticate, serviceController.putService);
// router.delete('/:id', authenticate, serviceController.deleteService);
// router.get('/client',serviceController.getServices)

module.exports = router;
