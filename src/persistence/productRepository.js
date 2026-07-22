const prisma = require("../config/prismaClient");

// Get all products
async function getAllProducts() {
    return await prisma.product.findMany({
        orderBy: {
            id: "asc",
        },
    });
}

// Get product by ID
async function getProductById(id) {
    return await prisma.product.findUnique({
        where: {
            id: Number(id),
        },
    });
}

module.exports = {
    getAllProducts,
    getProductById,
};