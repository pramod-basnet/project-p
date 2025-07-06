// Import express to create a router
const express = require('express');
// Import controller functions for booking operations
const {
  createBooking,
  getBookingById,
  getUserBookings,
  getAllBookings,
  updateBookingStatus,
  deleteBooking,
} = require('../controllers/bookingController');
// Import authentication middleware
const { protect, admin } = require('../middleware/authMiddleware');

// Create an Express router instance
const router = express.Router();

// Define routes
// POST /api/bookings - Create a new booking (protected)
// GET /api/bookings - Get all bookings (admin only)
router.route('/').post(protect, createBooking).get(protect, admin, getAllBookings);

// GET /api/bookings/mybookings - Get bookings for the logged-in user (protected)
router.get('/mybookings', protect, getUserBookings);

// GET /api/bookings/:id - Get a single booking by ID (protected, owner or admin)
// PUT /api/bookings/:id/status - Update booking status (admin only)
// DELETE /api/bookings/:id - Delete a booking (admin only)
router
  .route('/:id')
  .get(protect, getBookingById)
  .put(protect, admin, updateBookingStatus) // Assuming you want to update status via PUT to :id/status
  .delete(protect, admin, deleteBooking);

// Export the router to be used in server.js
module.exports = router;