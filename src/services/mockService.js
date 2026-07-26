const userRepository = require("../persistence/userRepository");
const productRepository = require("../persistence/productRepository");
const orderRepository = require("../persistence/orderRepository");


// Get all users
async function getAllUsers(page, limit) {
    return await userRepository.getAllUsers(page, limit);
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

async function getAllUsersWithOrders() {
    return await userRepository.getUsersWithOrders();
}

async function getAllOrdersWithDetails() {
    return await userRepository.getOrdersWithDetails();
}

async function getAllProductsWithOrders() {
    return await userRepository.getProductsWithOrders();
}

module.exports = {
    getAllUsers,
    getUserById,
    getAllProducts,
    getProductById,
    getAllOrders,
    getOrderById,

    getAllUsersWithOrders,
    getAllOrdersWithDetails,
    getAllProductsWithOrders,
};