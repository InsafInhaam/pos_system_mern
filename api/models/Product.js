const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
  },
  category: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
  },
  color: {
    type: String,
  },
  size: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  status: {
    type: String,
  },
  tax: {
    type: Number,
  },
  dimensions: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  postDate: {
    type: Date,
    default: Date.now(),
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
