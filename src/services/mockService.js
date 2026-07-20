const { users, products, orders } = require("../data/mockData");

// Get all users
const getAllUsers = () => {
    return users;
};

// Get all products
const getAllProducts = () => {
    return products;
};

// Get all orders
const getAllOrders = () => {
    return orders;
};

module.exports = {
    getAllUsers,
    getAllProducts,
    getAllOrders
};