const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT;


// Import Health Routes
const healthRoutes = require("./routes/healthRoutes");
const sampleRoutes = require("./routes/sampleRoutes");
const mockRoutes = require("./routes/mockRoutes");

// Use Routes
app.use("/", healthRoutes);
app.use("/", sampleRoutes);
app.use("/", mockRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});