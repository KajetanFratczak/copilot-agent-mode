import mongoose from 'mongoose';
import { User } from '../models/User.js';
import { Team } from '../models/Team.js';
import { Activity } from '../models/Activity.js';
import { LeaderboardEntry } from '../models/LeaderboardEntry.js';
import { Workout } from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      {
        name: 'Ava Chen',
        email: 'ava@example.com',
        role: 'captain',
        fitnessLevel: 'advanced',
      },
      {
        name: 'Noah Patel',
        email: 'noah@example.com',
        role: 'member',
        fitnessLevel: 'intermediate',
      },
      {
        name: 'Mia Alvarez',
        email: 'mia@example.com',
        role: 'coach',
        fitnessLevel: 'advanced',
      },
    ]);

    const teams = await Team.insertMany([
      {
        name: 'Velocity Squad',
        goal: 'Complete 30 workouts this month',
        members: [users[0]._id, users[1]._id],
        weeklyTarget: 6,
      },
      {
        name: 'Starlight Runners',
        goal: 'Log 100 km in weekly challenges',
        members: [users[2]._id],
        weeklyTarget: 4,
      },
    ]);

    await Activity.insertMany([
      {
        type: 'run',
        durationMinutes: 35,
        caloriesBurned: 420,
        completedAt: new Date('2026-07-27T07:30:00Z'),
        user: users[0]._id,
      },
      {
        type: 'strength',
        durationMinutes: 50,
        caloriesBurned: 340,
        completedAt: new Date('2026-07-27T18:15:00Z'),
        user: users[1]._id,
      },
      {
        type: 'cycle',
        durationMinutes: 40,
        caloriesBurned: 500,
        completedAt: new Date('2026-07-27T06:00:00Z'),
        user: users[2]._id,
      },
    ]);

    await LeaderboardEntry.insertMany([
      {
        user: users[0]._id,
        points: 1420,
        streak: 7,
        rank: 1,
      },
      {
        user: users[1]._id,
        points: 1180,
        streak: 3,
        rank: 2,
      },
      {
        user: users[2]._id,
        points: 1360,
        streak: 5,
        rank: 3,
      },
    ]);

    await Workout.insertMany([
      {
        name: 'Morning Mobility Flow',
        category: 'mobility',
        difficulty: 'easy',
        durationMinutes: 20,
        description: 'A gentle mobility session to wake up the body.',
      },
      {
        name: 'HIIT Burn Circuit',
        category: 'cardio',
        difficulty: 'hard',
        durationMinutes: 30,
        description: 'Short, intense intervals for full-body conditioning.',
      },
      {
        name: 'Core Strength Builder',
        category: 'strength',
        difficulty: 'medium',
        durationMinutes: 25,
        description: 'A focused workout for abs, glutes, and posture.',
      },
    ]);

    console.log(`Seeded ${users.length} users, ${teams.length} teams, activities, leaderboard entries, and workouts`);
    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
