import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: String,
  avatar: String,
  email: String,
  google: {
    googleId: String,
  },
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

const developer = new mongoose.model('developer', schema);
export default developer;