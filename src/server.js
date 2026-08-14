const dotenv = require("dotenv");
const http = require("http");
const cluster = require("cluster");
//const os = require("os");
const { Server } = require("socket.io");

dotenv.config();

const app = require("./app");

const PORT = process.env.PORT;
const NUM_WORKERS = 4;

if (cluster.isPrimary) {
    console.log(`Primary process ${process.pid} is running`);
    console.log(`Starting ${NUM_WORKERS} worker processes...`);

    for (let i = 0; i < NUM_WORKERS; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker) => {
        console.log(`Worker ${worker.process.pid} exited. Starting a replacement worker...`);
        cluster.fork();
    });
} else {
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

    // HTTP server tuning
    server.keepAliveTimeout = 65000;
    server.headersTimeout = 66000;
    server.requestTimeout = 30000;

    server.listen(PORT, () => {
        console.log(`Worker ${process.pid} is running on port ${PORT}`);
    });
}