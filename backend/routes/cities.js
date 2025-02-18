import express from 'express';
import { getAllCities, getCityById, getCityByName } from '../controllers/cityController.js';

const router = express.Router();

// ✅ Search city by name FIRST
router.get('/search/:name', getCityByName);

// ✅ Then define other routes
router.get('/', getAllCities);
router.get('/:id', getCityById);

export default router;
