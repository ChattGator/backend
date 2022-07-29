import mongoose from 'mongoose'


const schema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    name: String,
    projects: [
        {
            projectId: {
                type: String,
                unique: true,
                required: true
            }
        }
    ],
    createdAt: Date

})

const developer = new mongoose.model('developer', schema);
export default developer;