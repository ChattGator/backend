import mongoose from 'mongoose';


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
    name: String,
    description: String,
    isGroup: Boolean,
    groupConfig: {

    },
    admins: [
        {
            userId: {
                type: String,
                unique: true,
                required: true
            }
        }
    ],
    memberList: [
        {
            userId: {
                type: String,
                unique: true,
            }
        }
    ],
    messages: [
        {
            userId: {
                type: String,
                unique: true,
            }
        }
    ],
    createdAt: Date

})

const group = new mongoose.model('group', schema);
export default group;