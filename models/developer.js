import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  picture: String,
  email: {
    type: String,
    unique: true,
  },
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const developer = mongoose.model("Developer", schema);
export default developer;
