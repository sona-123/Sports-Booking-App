const mongoose = require('mongoose');

const sportSchema = mongoose.Schema({
    name: { type: String, required: true },
    courts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Court' }],
    centerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Center',
    },
});

module.exports = mongoose.model('Sport', sportSchema);
