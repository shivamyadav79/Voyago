// server.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import morgan from 'morgan';

import authRoutes from "./routes/auth.js";
import cityRoutes from './routes/cities.js';
import adminRoutes from './routes/admin.js';


const app = express();

// Connect to MongoDB
connectDB();
console.log('Auth routes mounted at /api/auth');


// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev')); // HTTP request logging



app.use('/api/auth', authRoutes);
app.use('/api/cities', cityRoutes); // Public city endpoints
app.use('/api/admin', adminRoutes); // Admin city endpoints and more


// Test Route
app.get("/", (req, res) => {
    res.send("Welcome to the Voyago API!");
});

// Error Handling Middleware (optional basic example)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: err.message || 'Internal Server Error' });
    });


// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
