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
    createProductHandler,
    updateProductHandler,
    deleteProductHandler,
} = require("../controllers/mockController");

// Users Route
router.get(
    "/api/users",
    authenticateToken,
    fetchUsers
);

// Products Route
router.get("/api/products", fetchProducts);

// Create Product
router.post("/api/products", createProductHandler);

// Update Product
router.put("/api/products/:id", updateProductHandler);

// Delete Product
router.delete("/api/products/:id", deleteProductHandler);


// Orders Route
router.get("/api/orders", fetchOrders);


// Users with Orders
router.get("/api/users/orders", fetchUsersWithOrders);

// Orders with User & Product
router.get("/api/orders/details", fetchOrdersWithDetails);

// Products with Orders
router.get("/api/products/orders", fetchProductsWithOrders);

module.exports = router;