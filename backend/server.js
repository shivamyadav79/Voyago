// server.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
// import connectDB from "./config/db.js";

const app = express();

// Connect to MongoDB
// connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("Welcome to the Voyago API!");
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
