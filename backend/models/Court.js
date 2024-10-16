const mongoose = require('mongoose');

const courtSchema = mongoose.Schema({
    name: { type: String, required: true },
    sportId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Sport',
    },
});

module.exports = mongoose.model('Court', courtSchema);
