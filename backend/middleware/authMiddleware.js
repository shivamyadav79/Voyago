// middlewares/authMiddleware.js
import jwt from "jsonwebtoken";

/**
 * Middleware to verify JWT token.
 * It extracts the token from the Authorization header,
 * verifies it, and attaches the decoded payload to req.user.
 */
export const verifyToken = (req, res, next) => {
    try {
        // Extract token from "Authorization: Bearer <token>"
        const token = req.header("Authorization")?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Access denied: No token provided" });
        }
        // Verify token and attach decoded payload to req.user
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid or expired token" });
    }
};

/**
 * Middleware to verify Admin access.
 * Assumes that verifyToken has already run.
 */
export const verifyAdmin = (req, res, next) => {
    // Check if req.user exists and if its role is "admin"
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        res.status(403).json({ error: "Access denied: Admins only" });
    }
};
