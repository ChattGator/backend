import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    userId: {
        type: String,
        unique: true,
        required: true
    },
    messageType: {
        type: String,
        enum: ['Text', 'Image', 'Video', 'File']
    },
    message: String,
    createdAt: Date
})

const message = mongoose.model('message', schema);
export default message;