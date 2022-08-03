import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import bodyParser from "body-parser";
import developerRouter from "./routes/developer"
import session from "express-session";
import auth from "./routes/auth";
import v1 from './routes/v1/index'

const app = express();
const PORT = process.env.port || 5000;


const allowlist = [];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

app.use(cors());
app.use(bodyParser.json()); // Parse request body

// router middleware
app.use("/api/v1", v1)
app.use("/api/v1/developer", developerRouter);

mongoose.connect(process.env.DATABASE_URL, {
  // connect to Mongo
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  // mock server
  res.status(200).json({ message: "welcome to express servr" });
});

app.use((req, res) => {
  // 404 Not found
  res.status(404).json({ message: "Not found 404" });
});

app.listen(PORT, () => console.log("express server ready"));
