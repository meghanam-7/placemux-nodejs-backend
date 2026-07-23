const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");

dotenv.config();

const app = express();

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

// Use Routes
app.use("/", healthRoutes);
app.use("/", sampleRoutes);
app.use("/", mockRoutes);
app.use("/", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});