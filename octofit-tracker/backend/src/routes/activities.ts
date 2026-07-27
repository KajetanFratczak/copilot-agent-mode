import { Router } from 'express';
import { Activity } from '../models/Activity.js';
import { getApiBaseUrl } from '../utils/apiUrl.js';

const router = Router();

router.get('/', async (_req, res) => {
  const activities = await Activity.find({}).populate('user').lean();
  res.json({ apiBaseUrl: getApiBaseUrl(), activities });
});

router.post('/', async (req, res) => {
  const activity = await Activity.create(req.body);
  res.status(201).json(activity);
});

export default router;
