import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import bodyParser from "body-parser";
import passport from "./passport/";
import session from "express-session";
import auth from "./routes/auth";

const app = express();
const PORT = process.env.port || 5000;

const allowlist = ["http://localhost:3000"];
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

app.use(
  session({
    secret: process.env.APP_SECRET || "this is the default passphrase",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// router middleware
app.use("/api/v1/auth", auth);

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
