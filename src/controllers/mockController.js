const {
    getAllUsers,
    getAllProducts,
    getAllOrders
} = require("../services/mockService");

// Get Users
const fetchUsers = (req, res) => {
    try {
        const users = getAllUsers();

        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data: users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch users"
        });
    }
};

// Get Products
const fetchProducts = (req, res) => {
    try {
        const products = getAllProducts();

        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch products"
        });
    }
};

// Get Orders
const fetchOrders = (req, res) => {
    try {
        const orders = getAllOrders();

        res.status(200).json({
            success: true,
            message: "Orders fetched successfully",
            data: orders
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch orders"
        });
    }
};

module.exports = {
    fetchUsers,
    fetchProducts,
    fetchOrders
};