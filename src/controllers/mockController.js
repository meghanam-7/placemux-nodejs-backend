const {
    getAllUsers,
    getAllProducts,
    getAllOrders
} = require("../services/mockService");

// Get Users
const fetchUsers = async (req, res) => {
    try {
        const users = await getAllUsers();

        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data: users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch users",
            error: error.message
        });
    }
};

// Get Products
const fetchProducts = async (req, res) => {
    try {
        const products = await getAllProducts();

        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch products",
            error: error.message
        });
    }
};

// Get Orders
const fetchOrders = async (req, res) => {
    try {
        const orders = await getAllOrders();

        res.status(200).json({
            success: true,
            message: "Orders fetched successfully",
            data: orders
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch orders",
            error: error.message
        });
    }
};

module.exports = {
    fetchUsers,
    fetchProducts,
    fetchOrders
};