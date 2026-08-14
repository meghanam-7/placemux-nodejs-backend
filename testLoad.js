const autocannon = require("autocannon");

const url = "http://localhost:3000/api/products";

console.log("🚀 Starting baseline load test...");
console.log(`Target: ${url}`);
console.log("Duration: 10 seconds");
console.log("Connections: 10");

autocannon(
    {
        url,
        connections: 10,
        duration: 10,
    },
    (error, result) => {
        if (error) {
            console.error("❌ Load test failed:", error.message);
            return;
        }

        console.log("\n✅ Baseline load test completed.");
        console.log(`Requests/sec: ${result.requests.average}`);
        console.log(`Latency average: ${result.latency.average} ms`);
        console.log(`Latency p99: ${result.latency.p99} ms`);
        console.log(`Total requests: ${result.requests.total}`);
        console.log(`Errors: ${result.errors}`);
    }
);