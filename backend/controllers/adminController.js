import City from "../models/City.js";
import Place from "../models/Place.js";
import User from "../models/User.js";
import Review from "../models/Review.js";

/**
 * Creates a new city.
 * Expects: { name, history, description, image, rating, pinCode }
 */
export const createCity = async (req, res) => {
  try {
    const { name, history, description, image, rating, pinCode } = req.body;
    const newCity = new City({
      name,
      history,
      description,
      image,
      rating,
      pinCode,
    });
    await newCity.save();
    res.status(201).json(newCity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Updates an existing city.
 * Expects: City ID in URL and updated fields in the body.
 */
export const updateCity = async (req, res) => {
  try {
    const updatedCity = await City.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCity) {
      return res.status(404).json({ error: "City not found" });
    }
    res.json(updatedCity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Deletes a city.
 * Expects: City ID in URL.
 */
export const deleteCity = async (req, res) => {
  try {
    const deletedCity = await City.findByIdAndDelete(req.params.id);
    if (!deletedCity) {
      return res.status(404).json({ error: "City not found" });
    }
    res.json({ message: "City deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Creates a new place.
 * Expects JSON: { name, type, description, address, location, contact, rating, images, priceRange, shareableUrl, city }
 */
export const createPlace = async (req, res) => {
  try {
    const {
      name,
      type,
      description,
      address,
      location,
      contact,
      rating,
      images,
      priceRange,
      shareableUrl,
      city,
    } = req.body;

    const newPlace = new Place({
      name,
      type,
      description,
      address,
      location,
      contact,
      rating,
      images,
      priceRange,
      shareableUrl,
      city,
    });
    await newPlace.save();
    res.status(201).json(newPlace);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Updates an existing place.
 * Expects: Place ID in URL and updated fields in the body.
 */
export const updatePlace = async (req, res) => {
  try {
    const updatedPlace = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPlace) {
      return res.status(404).json({ error: "Place not found" });
    }
    res.json(updatedPlace);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Deletes a place.
 * Expects: Place ID in URL.
 */
export const deletePlace = async (req, res) => {
  try {
    const deletedPlace = await Place.findByIdAndDelete(req.params.id);
    if (!deletedPlace) {
      return res.status(404).json({ error: "Place not found" });
    }
    res.json({ message: "Place deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Gets all users (excluding passwords).
 */
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Deletes a user by ID.
 */
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Gets analytics data (counts of users, cities, places, reviews).
 */
export const getAnalytics = async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const cityCount = await City.countDocuments();
    const placeCount = await Place.countDocuments();
    const reviewCount = await Review.countDocuments();

    res.json({
      totalUsers: userCount,
      totalCities: cityCount,
      totalPlaces: placeCount,
      totalReviews: reviewCount,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
