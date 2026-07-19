const express = require("express");
const router = express.Router();

const { users, products, orders } = require("../data/mockData");

// GET Users
router.get("/api/users", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Users fetched successfully",
    data: users,
  });
});

// GET Products
router.get("/api/products", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Products fetched successfully",
    data: products,
  });
});

// GET Orders
router.get("/api/orders", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Orders fetched successfully",
    data: orders,
  });
});

module.exports = router;