const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");

const http = require("http");
const { Server } = require("socket.io");

dotenv.config();

const app = express();

require("./workers/emailWorker");

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    console.log(`Client Connected: ${socket.id}`);

    // Welcome Event
    socket.emit("welcome", {
        message: "Welcome to PlaceMux Real-Time Server!",
    });

    // Send Message
    socket.on("sendMessage", (data) => {
        console.log("📩 Message Received:", data);

        socket.emit("messageReceived", {
            message: `Server received: ${data.message}`,
        });
    });

    // Join Room
    socket.on("joinRoom", (roomName) => {
        socket.join(roomName);

        console.log(`${socket.id} joined room: ${roomName}`);

        socket.emit("roomJoined", {
            message: `Joined room: ${roomName}`,
        });
    });

    // Room Message
    socket.on("roomMessage", ({ roomName, message }) => {
        io.to(roomName).emit("receiveRoomMessage", {
            room: roomName,
            message,
        });
    });

    // Disconnect
    socket.on("disconnect", () => {
        console.log(`Client Disconnected: ${socket.id}`);
    });
});

const PORT = process.env.PORT;

// Middleware
app.use(express.json());
//..
app.use(helmet());

// Import Routes
const healthRoutes = require("./routes/healthRoutes");
const sampleRoutes = require("./routes/sampleRoutes");
const mockRoutes = require("./routes/mockRoutes");
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");

// Use Routes
app.use("/", healthRoutes);
app.use("/", sampleRoutes);
app.use("/", mockRoutes);
app.use("/", authRoutes);
app.use("/", jobRoutes);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});