// routes/auth.js
import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
console.log('Auth routes loaded');
const router = express.Router();

// Test route to check if auth routes are working
router.get('/test', (req, res) => {
  res.json({ message: 'Auth route test working' });
});

// Registration endpoint
router.post('/register', registerUser);

// Login endpoint
router.post('/login', loginUser);

export default router;
