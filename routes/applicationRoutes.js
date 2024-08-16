const express = require('express');
const Application = require('../models/Application');
const router = express.Router();

// Get all applications (admin only)
router.get('/', async (req, res) => {
    const applications = await Application.find();
    res.json(applications);
});

// Apply for a scholarship
router.post('/', async (req, res) => {
    const { userId, scholarship } = req.body;
    const application = new Application({ userId, scholarship });
    await application.save();
    res.status(201).send('Application submitted');
});

module.exports = router;
