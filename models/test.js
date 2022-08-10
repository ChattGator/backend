import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const test = mongoose.model("Test", testSchema);
export default test;
