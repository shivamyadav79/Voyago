import express from "express";
import { getReviews, getReviewById, createReview, updateReview, deleteReview } from "../controllers/reviewController.js";

const router = express.Router();

// GET /api/reviews - Retrieve all reviews (optionally filtered by place)
router.get("/", getReviews);

// GET /api/reviews/:id - Retrieve a specific review by ID
router.get("/:id", getReviewById);

// POST /api/reviews - Create a new review
router.post("/", createReview);

// PUT /api/reviews/:id - Update a review
router.put("/:id", updateReview);

// DELETE /api/reviews/:id - Delete a review
router.delete("/:id", deleteReview);

export default router;
