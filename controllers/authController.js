const Admin = require("../models/admin.model");
const generateToken = require("../utils/generateToken");

// Register new admin
const registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if admin already exists
  const existingAdmin = await Admin.findOne({ email });
  if (existingAdmin) {
    return res.status(400).json({ message: "Admin already exists" });
  }

  try {
    const admin = new Admin({
      name,
      email,
      password,
    });
    await admin.save();

    // Generate JWT token
    const token = generateToken(admin._id);

    res.status(201).json({
      message: "Admin registered successfully",
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Error registering admin", error });
  }
};

// Admin login
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  // Find the admin by email
  const admin = await Admin.findOne({ email });

  // Check if the admin exists
  if (!admin) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Check if the password matches
  const isPasswordMatch = await admin.matchPassword(password);

  if (!isPasswordMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate JWT token
  const token = generateToken(admin._id);

  // Respond with success message and the token
  res.json({
    message: "Login successful",
    token,
  });
};

module.exports = { registerAdmin, loginAdmin };
