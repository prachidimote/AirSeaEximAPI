const mongoose = require("mongoose");

// Define the Product schema
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    description: {
      type: String,
      required: [true, "Please enter product description"],
    },
    image: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: [true, "Please select a category"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter product quantity"],
      min: [0, "Quantity cannot be negative"],
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],
    },
    currency: {
      type: String,
      default: "INR",
    },
    originCountry: {
      type: String,
      required: [true, "Please enter origin country"],
    },
    destinationCountries: {
      type: [String],
      required: [true, "Please specify destination countries"],
    },
    createdBy: {
      type: [String],
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "discontinued"],
      default: "active",
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
