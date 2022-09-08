import mongoose from "mongoose";

const schema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  name: String,
  description: String,
  isGroup: {
    type: Boolean,
    default: false
  },
  groupConfig: {},
  admins: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  membersList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isDeleted:{
    type: Boolean,
    default:false
  }
});

const group = mongoose.model("Group", schema);
export default group;
