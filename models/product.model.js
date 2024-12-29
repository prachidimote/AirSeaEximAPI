const mongoose = require("mongoose");
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
      required: [true, "Please provide a product image"],
    },
    createdBy: {
      type: String,
      required: [true, "Please specify the creator"],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
