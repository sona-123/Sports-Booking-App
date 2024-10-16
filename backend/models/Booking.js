// models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  center: {
    type: String,
    required: true,
  },
  sport: {
    type: String,
    required: true,
  },
  court: {
    type: String,
    required: true,
  },
  slot: {
    type: String, // Example: "10:00 AM - 11:00 AM"
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
