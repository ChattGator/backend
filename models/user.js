import mongoose from "mongoose";

const schema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  userId: String,
  avatar: String,
  userName: String,
  bio: String,
  status: {
    type: String,
    enum: ["Online", "Offline"],
  },
  lastSeen: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const user = mongoose.model("User", schema);
export default user;
