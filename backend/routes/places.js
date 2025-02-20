// routes/places.js
import express from "express";
import { getPlaces, getPlaceById, getPlaceByName } from "../controllers/placeController.js";

const router = express.Router();

// GET /api/places - Retrieve all places (with optional filtering)
router.get("/", getPlaces);

// GET /api/places/:id - Retrieve a specific place by ID
router.get("/:id", getPlaceById);

// GET /api/places/name/:name - Retrieve a place by name (case-insensitive)
router.get("/name/:name", getPlaceByName);

export default router;
