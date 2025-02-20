// server.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";

// Import routes
import authRoutes from "./routes/auth.js";
import cityRoutes from "./routes/cities.js";
import placesRoutes from "./routes/places.js";  // Make sure this is imported
import adminRoutes from "./routes/admin.js";
import reviewRoutes from './routes/reviews.js';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/cities', cityRoutes);
app.use('/api/places', placesRoutes); // Places routes mounted here
app.use('/api/admin', adminRoutes);
app.use('/api/reviews', reviewRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Welcome to the Voyago API!");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
