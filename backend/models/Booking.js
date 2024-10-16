const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    courtId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Court',
    },
    date: { type: String, required: true },
    slot: { type: String, required: true },
});

module.exports = mongoose.model('Booking', bookingSchema);
