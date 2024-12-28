const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Remove useNewUrlParser and useUnifiedTopology options
    await mongoose.connect(process.env.MONGO_URI); // No need for these options
    console.log("Connected to database!");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
