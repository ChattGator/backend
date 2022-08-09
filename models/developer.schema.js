import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: String,
  picture: String,
  email: String,
  projects: [
    {
      projectId: {
        type: String
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const developer = mongoose.model('developer', schema);
export default developer;