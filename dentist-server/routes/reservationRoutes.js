const express = require('express');
const AppointmentsController = require('../controllers/AppointmentsController');
const { authenticate } = require('../helpers');

const router = express.Router();

// Create a new reservation
router.post('/', authenticate, AppointmentsController.createAppointments);

// Get all reservations
router.get('/', authenticate, reservationController.getReservations);
router.get('/:id', authenticate, reservationController.getReservationById);
router.put('/:id', authenticate, reservationController.patchReservationById);


module.exports = router;
