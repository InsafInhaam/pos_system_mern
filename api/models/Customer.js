const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
  },
  position: {
    type: String,
  },
  gender: {
    type: String,
  },
  image: {
    type: String,
  },
  postDate: {
    type: Date,
    default: Date.now(),
  },
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;
