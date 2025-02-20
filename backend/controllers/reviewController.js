import Review from "../models/Review.js";

/**
 * Get all reviews.
 * Optionally, you can filter by place using query parameters (e.g., ?place=<placeId>).
 */
export const getReviews = async (req, res) => {
  try {
    const { place } = req.query;
    const filter = {};
    if (place) filter.place = place;

    // Optionally, you can also populate user and place details
    const reviews = await Review.find(filter)
      .populate("user", "username")
      .populate("place", "name");
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get a single review by ID.
 */
export const getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)
      .populate("user", "username")
      .populate("place", "name");
    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Create a new review.
 * Expects JSON: { rating, comment, user, place }
 */
export const createReview = async (req, res) => {
  try {
    const { rating, comment, user, place } = req.body;
    const newReview = new Review({ rating, comment, user, place });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Update an existing review.
 * Expects: Review ID in URL and updated fields in the request body.
 */
export const updateReview = async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedReview) {
      return res.status(404).json({ error: "Review not found" });
    }
    res.json(updatedReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Delete a review.
 * Expects: Review ID in URL.
 */
export const deleteReview = async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) {
      return res.status(404).json({ error: "Review not found" });
    }
    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
