import http from "http";
import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import apiRoutes from "./routes/";
import { Server } from "socket.io";
import cors from "cors";
import MessageService from "./services/v1/MessageService";
import message from "./models/message";
const messageService = new MessageService(message);

const app = express();
app.use(
    cors({
        origin: "*",
    })
);
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

// router middleware
app.use("/api", apiRoutes);

// socket
io.on("connection", (socket) => {
    socket.on("joinRoom", ({ user, groupId }) => {
        socket.join(groupId);

        socket.emit("message", {
            user: { name: "Server" },
            message: `Welcome ${user.name}`,
        });
    });

    socket.on("chatMessage", ({ groupId, user, message }) => {
        try {
            messageService.insert({
                userId: user._id,
                groupId: groupId,
                message,
                messageType: "Text",
            });
        } catch (error) {
            console.log(error);
        }
        io.to(groupId).emit("message", { user, message });
    });

    socket.on("userTyping", ({ groupId, user }) => {
        io.to(groupId).emit("usersReceiveTyping", { user, groupId });
    })
});

export default server;
