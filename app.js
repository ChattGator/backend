import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import apiRoutes from "./routes/";
import http from 'http';
import { Server } from "socket.io"
const app = express();
const server = http.createServer(app);
const io = new Server(server);

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

// router middleware
app.use("/api", apiRoutes);

io.on('connection', (socket) => {
    console.log(` A User connected with socket id ${socket.id}`);
})

export default server;
