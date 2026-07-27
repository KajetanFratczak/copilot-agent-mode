import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './config/database.js';
import usersRouter from './routes/users.js';
import teamsRouter from './routes/teams.js';
import activitiesRouter from './routes/activities.js';
import leaderboardRouter from './routes/leaderboard.js';
import workoutsRouter from './routes/workouts.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8000);

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'OctoFit Tracker API is running' });
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend' });
});

app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

app.listen(port, '0.0.0.0', () => {
  console.log(`API listening on port ${port}`);
});
