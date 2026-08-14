const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const timeout = require("connect-timeout");

const app = express();
app.use(timeout("10s"));



// Middleware
app.use(express.json({ limit: "1mb" }));
app.use(helmet());
app.use(compression());


// Import Routes
const healthRoutes = require("./routes/healthRoutes");
const sampleRoutes = require("./routes/sampleRoutes");
const mockRoutes = require("./routes/mockRoutes");
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
const cacheMetricsRoutes = require("./routes/cacheMetricsRoutes");

// Use Routes
app.use("/", healthRoutes);
app.use("/", sampleRoutes);
app.use("/", mockRoutes);
app.use("/", authRoutes);
app.use("/", jobRoutes);
app.use("/", cacheMetricsRoutes);

// app.use((req, res, next) => {
//     if (!req.timedout) {
//         next();
//     }
// });

// Graceful timeout error handler
app.use((err, req, res, next) => {
    if (err && err.code === "ETIMEDOUT") {
        return res.status(503).json({
            success: false,
            message: "Request timed out. Server is currently under heavy load.",
        });
    }

    next(err);
});

module.exports = app;