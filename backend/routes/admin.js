import express from "express";
import { verifyToken, verifyAdmin } from "../middleware/authMiddleware.js";
import {
  createCity, updateCity, deleteCity,
  createPlace, updatePlace, deletePlace,
  getAllUsers, deleteUser, getAnalytics
} from "../controllers/adminController.js";

const router = express.Router();

// Apply token verification and admin check
router.use(verifyToken, verifyAdmin);

// Test route
router.get("/test", (req, res) => {
  res.json({ message: "Admin route test working!" });
});

// Admin endpoints for city management
router.post("/cities", createCity);
router.put("/cities/:id", updateCity);
router.delete("/cities/:id", deleteCity);

// Admin endpoints for place management
router.post("/places", createPlace);
router.put("/places/:id", updatePlace);
router.delete("/places/:id", deletePlace);

// Admin endpoints for user management
router.get("/users", getAllUsers);
router.delete("/users/:id", deleteUser);

// Admin endpoint for analytics
router.get("/analytics", getAnalytics);

export default router;
