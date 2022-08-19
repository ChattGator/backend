import mongoose from "mongoose";
import { nanoid } from "nanoid";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  developerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Developer",
    required: true,
  },
  description: {
    type: String,
  },
  credentials: {
    secret: {
      type: String,
      required: true,
      default: nanoid(12),
    },
  },
  projectConfig: {
    isGroupEnabled: {
      type: Boolean,
      default: false,
    },
    chatLimit: {
      type: Number,
      default: 100,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const project = mongoose.model("Project", schema);
export default project;
