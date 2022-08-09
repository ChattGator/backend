import mongoose from "mongoose";
import { nanoid } from "nanoid";

const schema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true,
        default: nanoid(10)
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
            required: true,
            default: nanoid(12)
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
    createdAt: {
        type: Date,
        default: Date.now
    }

})

const project = mongoose.model('project', schema);
export default project