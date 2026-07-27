import { Router } from 'express';
import { Workout } from '../models/Workout.js';
import { getApiBaseUrl } from '../utils/apiUrl.js';

const router = Router();

router.get('/', async (_req, res) => {
  const workouts = await Workout.find({}).lean();
  res.json({ apiBaseUrl: getApiBaseUrl(), workouts });
});

router.post('/', async (req, res) => {
  const workout = await Workout.create(req.body);
  res.status(201).json(workout);
});

export default router;
