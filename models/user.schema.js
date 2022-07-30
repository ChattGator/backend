import mongoose from "mongoose";

const schema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    projectId: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    avatar: String,
    userName: String,
    bio: String,
    status: {
        type: String,
        enum: ['Online', 'Offline']
    },
    lastSeen: Date,
    createdAt: Date
})

const user = new mongoose.model('user', schema);
export default user