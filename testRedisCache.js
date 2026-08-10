const {
    getCache,
    setCache,
    deleteCache,
} = require("./src/utils/redisCache");

const test = async () => {
    const key = "task12_test";

    const testData = {
        message: "Redis cache is working!",
        task: 12,
    };

    console.log("➡️ Storing data in Redis...");

    await setCache(key, testData, 60);

    console.log("➡️ Reading data from Redis...");

    const cachedData = await getCache(key);

    console.log("📦 Cached Data:", cachedData);

    console.log("➡️ Deleting data from Redis...");

    await deleteCache(key);

    const deletedData = await getCache(key);

    console.log("🗑️ Data after deletion:", deletedData);

    process.exit(0);
};

test();