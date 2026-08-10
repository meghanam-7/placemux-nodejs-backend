const http = require("http");

const makeRequest = (number) => {
    return new Promise((resolve, reject) => {
        const start = Date.now();

        http.get("http://localhost:3000/api/products", (res) => {
            let data = "";

            res.on("data", (chunk) => {
                data += chunk;
            });

            res.on("end", () => {
                const duration = Date.now() - start;

                const result = JSON.parse(data);

                console.log(
                    `Request ${number}: ${result.source} | ${duration} ms`
                );

                resolve(result);
            });
        }).on("error", reject);
    });
};

const runTest = async () => {
    console.log("🚀 Starting cache stampede test...\n");

    const requests = [];

    for (let i = 1; i <= 10; i++) {
        requests.push(makeRequest(i));
    }

    await Promise.all(requests);

    console.log("\n✅ Cache stampede test completed");
};

runTest();