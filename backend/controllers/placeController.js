// controllers/placeController.js
import Place from "../models/Place.js";

/**
 * Get all places.
 * Optionally filters by city and/or type using query parameters.
 * Example: GET /api/places?city=<cityId>&type=hotel
 */
export const getPlaces = async (req, res) => {
  try {
    const { city, type } = req.query;
    let filter = {};
    if (city) filter.city = city;
    if (type) filter.type = type;

    const places = await Place.find(filter);
    res.json(places);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get a place by its ID.
 * Returns a single place object.
 */
export const getPlaceById = async (req, res) => {
  try {
    const { id } = req.params;
    const place = await Place.findById(id);
    if (!place) {
      return res.status(404).json({ error: "Place not found" });
    }
    res.json(place);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get a place by its name (case-insensitive).
 * Example: GET /api/places/name/Hotel%20ABC
 */
export const getPlaceByName = async (req, res) => {
  try {
    const { name } = req.params;
    // Using regex for case-insensitive search
    const place = await Place.findOne({ name: { $regex: new RegExp(`^${name}$`, "i") } });
    if (!place) {
      return res.status(404).json({ error: "Place not found" });
    }
    res.json(place);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
