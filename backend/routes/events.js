import express from 'express';
import auth from '../middleware/auth.js';
import Event from '../models/Event.js';

const router = express.Router();

// Fetch events for the authenticated user
router.get('/', auth, async (req, res) => {
  try {
    const events = await Event.find({ user: req.user.id });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new event
router.post('/', auth, async (req, res) => {
  try {
    const { title, date, description } = req.body;
    const event = new Event({ title, date, description, user: req.user.id });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;