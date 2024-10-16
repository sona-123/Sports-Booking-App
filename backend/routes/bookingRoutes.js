const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Get bookings for a specific sport on a date
router.get('/', async (req, res) => {
    const { sportId, date } = req.query;
    const bookings = await Booking.find({ sportId, date });
    res.json(bookings);
});

// Create a new booking
router.post('/', async (req, res) => {
    const { courtId, date, slot } = req.body;
    const existingBooking = await Booking.findOne({ courtId, date, slot });
    
    if (existingBooking) {
        return res.status(400).json({ message: 'Slot already booked' });
    }

    const booking = new Booking({ courtId, date, slot });
    await booking.save();
    res.status(201).json(booking);
});

module.exports = router;
