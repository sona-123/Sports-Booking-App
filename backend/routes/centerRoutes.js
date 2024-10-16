const express = require('express');
const router = express.Router();
const Center = require('../models/Center');

// Get all centers
router.get('/', async (req, res) => {
    const centers = await Center.find();
    res.json(centers);
});

module.exports = router;
