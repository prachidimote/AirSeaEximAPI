const jwt = require("jsonwebtoken");

const protectAdmin = (req, res, next) => {
  let token;

  // Check if the token is in the authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Extract the token

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach the admin id to the request
      req.admin = decoded.id;

      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  // If no token is provided
  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = { protectAdmin };
