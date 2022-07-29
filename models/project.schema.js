import mongoose from "mongoose";

const schema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    developerId: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
    },
    credentials: {
        secret: {
            type: String,
            unique: true,
            required: true
        }
    },
    projectConfig: {
        isGroupEnabled: {
            type: Boolean,
            default: false
        },
        chatLimit: {
            type: Number,
            default: 100
        }
    },
    createdAt: Date

})

const project = new mongoose.model('project', schema);
export default project