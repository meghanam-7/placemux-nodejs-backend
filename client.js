const { io } = require("socket.io-client");

const socket = io("http://localhost:3000");

socket.on("connect", () => {
    console.log("✅ Connected to server");
    console.log("Socket ID:", socket.id);
});

socket.on("welcome", (data) => {
    console.log("📩 Welcome Message:");
    console.log(data);
});

socket.emit("sendMessage", {
    message: "Hello Server!",
});

socket.on("messageReceived", (data) => {
    console.log("📨 Reply from Server:");
    console.log(data);
});

socket.emit("joinRoom", "developers");

socket.on("roomJoined", (data) => {
    console.log("🏠 Room Joined:");
    console.log(data);
});

socket.emit("roomMessage", {
    roomName: "developers",
    message: "Hello Developers!",
});

socket.on("receiveRoomMessage", (data) => {
    console.log("📢 Room Message:");
    console.log(data);
});

socket.on("disconnect", () => {
    console.log("❌ Disconnected from server");
});

socket.io.on("reconnect", (attempt) => {
    console.log(`🔄 Reconnected after ${attempt} attempt(s)`);
});

socket.io.on("reconnect_attempt", () => {
    console.log("🔄 Attempting to reconnect...");
});

socket.io.on("reconnect_error", (error) => {
    console.log("❌ Reconnection failed:", error.message);
});