const express = require('express');
const router = express.Router();
const Session = require('../models/sessionModel');

// POST /sessions
router.post('/', async (req, res) => {
  try {
    const { start_time, end_time, duration, milk_quantity } = req.body;
    const newSession = new Session({ start_time, end_time, duration, milk_quantity });
    await newSession.save();
    res.status(201).json(newSession);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /sessions
router.get('/', async (req, res) => {
  try {
    const sessions = await Session.find();
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;