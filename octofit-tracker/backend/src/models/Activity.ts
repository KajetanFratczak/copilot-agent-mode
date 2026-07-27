import { Schema, model } from 'mongoose';

const activitySchema = new Schema(
  {
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    completedAt: { type: Date, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true },
);

export const Activity = model('Activity', activitySchema);
