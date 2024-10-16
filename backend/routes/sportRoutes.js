const express = require('express');
const router = express.Router();
const Sport = require('../models/Sport');

// Get sports by center
router.get('/:centerId', async (req, res) => {
    const sports = await Sport.find({ centerId: req.params.centerId });
    res.json(sports);
});

module.exports = router;
