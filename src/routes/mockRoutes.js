const express = require("express");
const router = express.Router();
const {
    authenticateToken,
} = require("../middleware/authMiddleware");

const {
    fetchUsers,
    fetchProducts,
    fetchOrders,

    fetchUsersWithOrders,
    fetchOrdersWithDetails,
    fetchProductsWithOrders,
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


// Users with Orders
router.get("/api/users/orders", fetchUsersWithOrders);

// Orders with User & Product
router.get("/api/orders/details", fetchOrdersWithDetails);

// Products with Orders
router.get("/api/products/orders", fetchProductsWithOrders);

module.exports = router;