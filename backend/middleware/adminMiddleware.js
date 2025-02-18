// middleware/adminMiddleware.js

/**
 * Middleware to ensure that the user is an admin.
 * Assumes that the auth middleware has already decoded the JWT and set req.user.
 */
export const isAdmin = (req, res, next) => {
  // Check if req.user exists and if its role is 'admin'
  if (req.user && req.user.role === "admin") {
    return next();
  }
  // If not, return a 403 Forbidden response
  return res.status(403).json({ error: "Access denied: Admins only" });
};
