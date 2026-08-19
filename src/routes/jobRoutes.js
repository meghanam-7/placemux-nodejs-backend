const express = require("express");

const router = express.Router();

const {
    authenticateToken,
} = require("../middleware/authMiddleware");

const {
    createEmailJob,
} = require("../controllers/jobController");

router.post(
    "/api/jobs/email",
    authenticateToken,
    createEmailJob
);

module.exports = router;