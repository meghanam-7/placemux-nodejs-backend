const express = require("express");
const router = express.Router();

const {
    createEmailJob,
} = require("../controllers/jobController");

router.post("/api/jobs/email", createEmailJob);

module.exports = router;