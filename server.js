const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT;


// Import Health Routes
const healthRoutes = require("./routes/healthRoutes");
const sampleRoutes = require("./routes/sampleRoutes");

// Use Routes
app.use("/", healthRoutes);
app.use("/", sampleRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});