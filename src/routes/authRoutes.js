const express = require("express");
const router = express.Router();
const { authLimiter } = require("../middleware/rateLimiter");

const {
    signup,
    login,
} = require("../controllers/authController");

// Signup Route
router.post("/auth/signup", signup);

// Login Route
router.post(
    "/auth/login",
    authLimiter,
    login
);

module.exports = router;