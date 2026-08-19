const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const timeout = require("connect-timeout");
const cors = require("cors");
const { apiRateLimiter } = require("./middleware/rateLimiter");

const app = express();

if (process.env.NODE_ENV === "production") {
    app.set("trust proxy", 1);
}

app.use(timeout("10s"));



// Middleware
app.use(express.json({ limit: "1mb" }));
app.use(helmet());

// Enforce HTTPS in production
app.use((req, res, next) => {
    if (
        process.env.NODE_ENV === "production" &&
        !req.secure
    ) {
        return res.status(400).json({
            success: false,
            message: "HTTPS is required in production.",
        });
    }

    next();
});

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use(compression());
app.use("/api", apiRateLimiter);


// Import Routes
const healthRoutes = require("./routes/healthRoutes");
const sampleRoutes = require("./routes/sampleRoutes");
const mockRoutes = require("./routes/mockRoutes");
const workerRoutes = require("./routes/workerRoutes");
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
const cacheMetricsRoutes = require("./routes/cacheMetricsRoutes");

// Use Routes
app.use("/", healthRoutes);
app.use("/", sampleRoutes);
app.use("/", mockRoutes);
app.use("/", workerRoutes);
app.use("/", authRoutes);
app.use("/", jobRoutes);
app.use("/", cacheMetricsRoutes);


// app.use((req, res, next) => {
//     if (!req.timedout) {
//         next();
//     }
// });

// Global production-safe error handler
app.use((err, req, res, next) => {
    console.error("Unhandled application error:", err);

    if (err && err.code === "ETIMEDOUT") {
        return res.status(503).json({
            success: false,
            message: "Request timed out. Please try again later.",
        });
    }

    const isProduction = process.env.NODE_ENV === "production";

    return res.status(500).json({
        success: false,
        message: isProduction
            ? "Internal server error."
            : err.message || "Internal server error.",
    });
});



module.exports = app;