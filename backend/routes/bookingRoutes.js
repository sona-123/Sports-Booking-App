const express = require('express');
const Booking = require('../models/Booking');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');  // Ensure you're using your auth middleware
const router = express.Router();

// Create Booking API - POST /api/bookings
router.post(
  '/',
  auth, // Ensure the auth middleware is correctly used here
  [
    check('center', 'Center is required').not().isEmpty(),
    check('sport', 'Sport is required').not().isEmpty(),
    check('court', 'Court is required').not().isEmpty(),
    check('slot', 'Slot is required').not().isEmpty(),
    check('date', 'Date is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { center, sport, court, slot, date } = req.body;

    try {
      // Check if there's already a booking for the same center, sport, court, and slot
      const existingBooking = await Booking.findOne({
        center,
        sport,
        court,
        slot,
        date: new Date(date),
      });

      if (existingBooking) {
        return res.status(400).json({ message: 'Slot already booked for this court' });
      }

      // Create new booking
      const newBooking = new Booking({
        center,
        sport,
        court,
        slot,
        date: new Date(date),
        user: req.user ? req.user.id : null, // Handle undefined user
      });

      await newBooking.save();

      res.status(201).json({ message: 'Booking created successfully', newBooking });
    } catch (error) {
      console.error('Error during booking creation:', error.message);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// View Bookings API - GET /api/bookings
router.get('/', auth, async (req, res) => {
  const { center, sport, date } = req.query; // Get query parameters from request

  try {
    // Validate query parameters
    if (!center || !sport || !date) {
      return res.status(400).json({ message: 'center, sport, and date query parameters are required' });
    }

    // Query for bookings that match the given center, sport, and date
    const bookings = await Booking.find({
      center,
      sport,
      date: new Date(date),
    });

    // If no bookings are found, return a message
    if (bookings.length === 0) {
      return res.status(404).json({ message: 'No bookings found for the specified criteria' });
    }

    // Return the bookings
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
