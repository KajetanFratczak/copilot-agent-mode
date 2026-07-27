import { Schema, model } from 'mongoose';
const teamSchema = new Schema({
    name: { type: String, required: true, unique: true },
    goal: { type: String, required: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    weeklyTarget: { type: Number, default: 5 },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });
export const Team = model('Team', teamSchema);
