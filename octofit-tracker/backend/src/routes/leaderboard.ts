import { Router } from 'express';
import { LeaderboardEntry } from '../models/LeaderboardEntry.js';
import { getApiBaseUrl } from '../utils/apiUrl.js';

const router = Router();

router.get('/', async (_req, res) => {
  const leaderboard = await LeaderboardEntry.find({}).populate('user').sort({ rank: 1 }).lean();
  res.json({ apiBaseUrl: getApiBaseUrl(), leaderboard });
});

export default router;
