import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected sucessfully! "))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};

export default connectDB;