const express = require("express");
const app = express();

// Load environment variables
const dotenv = require("dotenv");
dotenv.config();

// Connect to MongoDB
const connectDB = require("./config/db.config");
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});