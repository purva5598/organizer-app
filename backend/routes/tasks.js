import express from 'express';
import auth from '../middleware/auth.js';
import Task from '../models/Task.js';

const router = express.Router();

// Fetch tasks for the authenticated user
router.get('/', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new task
router.post('/', auth, async (req, res) => {
  try {
    const { text } = req.body;
    const task = new Task({ text, user: req.user.id });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;