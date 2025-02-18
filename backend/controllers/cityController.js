import mongoose from 'mongoose';
import City from '../models/City.js';

/**
 * Get all cities.
 */
export const getAllCities = async (req, res) => {
  try {
    const cities = await City.find({});
    res.json(cities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get a city by its ID (Only for valid MongoDB ObjectId).
 */
export const getCityById = async (req, res) => {
  try {
    const { id } = req.params;

    // 🔹 Ensure the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid City ID" });
    }

    const city = await City.findById(id);
    if (!city) {
      return res.status(404).json({ error: "City not found" });
    }

    res.json(city);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get a city by name (case-insensitive).
 */
export const getCityByName = async (req, res) => {
  try {
    const { name } = req.params;

    // 🔹 Case-insensitive search using regex
    const city = await City.findOne({ name: { $regex: new RegExp(`^${name}$`, "i") } });

    if (!city) {
      return res.status(404).json({ error: "City not found" });
    }

    res.json(city);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
