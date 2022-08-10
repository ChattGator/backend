import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import apiRoutes from "./routes/";

const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

// router middleware
app.use("/api", apiRoutes);

export default app;
