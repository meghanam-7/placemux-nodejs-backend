const userRepository = require("../persistence/userRepository");
const productRepository = require("../persistence/productRepository");
const orderRepository = require("../persistence/orderRepository");

// Get all users
async function getAllUsers() {
    return await userRepository.getAllUsers();
}

// Get user by ID
async function getUserById(id) {
    return await userRepository.getUserById(id);
}

// Get all products
async function getAllProducts() {
    return await productRepository.getAllProducts();
}

// Get product by ID
async function getProductById(id) {
    return await productRepository.getProductById(id);
}

// Get all orders
async function getAllOrders() {
    return await orderRepository.getAllOrders();
}

// Get order by ID
async function getOrderById(id) {
    return await orderRepository.getOrderById(id);
}

module.exports = {
    getAllUsers,
    getUserById,
    getAllProducts,
    getProductById,
    getAllOrders,
    getOrderById,
};