const express = require("express");

const router = express.Router();

router.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Server is running"
    });
});

// router.get("/test/slow", (req, res) => {
//     setTimeout(() => {
//         res.json({
//             success: true,
//             message: "Slow request completed",
//         });
//     }, 15000);
// });

module.exports = router;