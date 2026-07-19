const express = require("express");

const router = express.Router();

router.get("/hello", (req, res) => {
    res.status(200).json({
        message: "Hello from PlaceMux Node.js Backend!"
    });
});

module.exports = router;