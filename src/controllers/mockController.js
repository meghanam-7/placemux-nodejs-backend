const {
    getAllUsers,
    getAllProducts,
    getAllOrders,

    getAllUsersWithOrders,
    getAllOrdersWithDetails,
    getAllProductsWithOrders,
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

// Get users with orders
const fetchUsersWithOrders = async (req, res) => {
    try {
        const users = await getAllUsersWithOrders();

        res.status(200).json({
            success: true,
            message: "Users with orders fetched successfully",
            data: users,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch users with orders",
            error: error.message,
        });
    }
};

// Get orders with user & product
const fetchOrdersWithDetails = async (req, res) => {
    try {
        const orders = await getAllOrdersWithDetails();

        res.status(200).json({
            success: true,
            message: "Orders with details fetched successfully",
            data: orders,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch orders",
            error: error.message,
        });
    }
};

// Get products with orders
const fetchProductsWithOrders = async (req, res) => {
    try {
        const products = await getAllProductsWithOrders();

        res.status(200).json({
            success: true,
            message: "Products with orders fetched successfully",
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch products",
            error: error.message,
        });
    }
};

module.exports = {
    fetchUsers,
    fetchProducts,
    fetchOrders,

    fetchUsersWithOrders,
    fetchOrdersWithDetails,
    fetchProductsWithOrders,
};