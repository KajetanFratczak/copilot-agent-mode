import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['captain', 'member', 'coach'], default: 'member' },
    fitnessLevel: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'intermediate' },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export const User = model('User', userSchema);
