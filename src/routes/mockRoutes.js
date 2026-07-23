const express = require("express");
const router = express.Router();
const {
    authenticateToken,
} = require("../middleware/authMiddleware");

const {
    fetchUsers,
    fetchProducts,
    fetchOrders
} = require("../controllers/mockController");

// Users Route
router.get(
    "/api/users",
    authenticateToken,
    fetchUsers
);

// Products Route
router.get("/api/products", fetchProducts);

// Orders Route
router.get("/api/orders", fetchOrders);

module.exports = router;