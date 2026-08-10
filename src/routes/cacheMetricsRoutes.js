const express = require("express");

const router = express.Router();

const {
    getMetrics,
    resetMetrics,
} = require("../controllers/cacheMetricsController");

router.get("/api/cache/metrics", getMetrics);

router.delete("/api/cache/metrics", resetMetrics);

module.exports = router;
