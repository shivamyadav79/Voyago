// routes/admin.js
import express from 'express';
import { verifyToken, verifyAdmin } from '../middleware/authMiddleware.js';
import { createCity, updateCity, deleteCity, getAllUsers, deleteUser, getAnalytics } from '../controllers/adminController.js';

const router = express.Router();

// First, verify the token; then, verify the admin role
router.use(verifyToken, verifyAdmin);

// Test route to confirm admin access
router.get('/test', (req, res) => {
    res.json({ message: "Admin route test working!" });
});

// Admin endpoints for city management
router.post('/cities', createCity);
router.put('/cities/:id', updateCity);
router.delete('/cities/:id', deleteCity);

// Admin endpoints for user management and analytics (if implemented)
// router.get('/users', getAllUsers);
// router.delete('/users/:id', deleteUser);
// router.get('/analytics', getAnalytics);

export default router;
