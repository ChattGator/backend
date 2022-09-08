import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group",
    required: true,
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true
  },
  messageType: {
    type: String,
    enum: ["Text", "Image", "Video", "File"],
  },
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

const message = mongoose.model("Message", schema);
export default message;
