const prisma = require("../config/prismaClient");

// Get all users
async function getAllUsers() {
    return await prisma.user.findMany({
        orderBy: {
            id: "asc",
        },
    });
}

// Get user by ID
async function getUserById(id) {
    return await prisma.user.findUnique({
        where: {
            id: Number(id),
        },
    });
}

// Get user by email
async function getUserByEmail(email) {
    return await prisma.user.findUnique({
        where: {
            email,
        },
    });
}

// Create user
async function createUser(userData) {
    try {
        return await prisma.user.create({
            data: userData,
        });
    } catch (error) {
        throw new Error(`Database error while creating user: ${error.message}`);
    }
}

// Update user
async function updateUser(id, userData) {
    try {
        return await prisma.user.update({
            where: {
                id: Number(id),
            },
            data: userData,
        });
    } catch (error) {
        throw new Error(`Database error while updating user: ${error.message}`);
    }
}

// Delete user
async function deleteUser(id) {
    try {
        return await prisma.user.delete({
            where: {
                id: Number(id),
            },
        });
    } catch (error) {
        throw new Error(`Database error while deleting user: ${error.message}`);
    }
}

// Transaction Example
async function createUserAndProduct(userData, productData) {
    return await prisma.$transaction(async (tx) => {

        const user = await tx.user.create({
            data: userData,
        });

        const product = await tx.product.create({
            data: productData,
        });

        return {
            user,
            product,
        };
    });
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser,
    createUserAndProduct,
};