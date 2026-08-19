const dotenv = require("dotenv");

dotenv.config({
    path: ".env.test",
    override: false,
});

const prisma = require("../src/config/prismaClient");

beforeAll(async () => {
    await prisma.order.deleteMany();
    await prisma.product.deleteMany();
    await prisma.user.deleteMany();
});

afterAll(async () => {
    await prisma.$disconnect();
});