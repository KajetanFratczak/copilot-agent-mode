import { Schema, model } from 'mongoose';

const workoutSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' },
    durationMinutes: { type: Number, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true },
);

export const Workout = model('Workout', workoutSchema);
