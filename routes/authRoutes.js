const express = require("express");
const router = express.Router();
const { loginAdmin, registerAdmin } = require("../controllers/authController");

// Register new admin
router.post("/register", registerAdmin);

// Login for admin
router.post("/login", loginAdmin);

module.exports = router;
