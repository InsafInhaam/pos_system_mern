const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const AdminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  image: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  postDate: {
    type: Date,
    default: Date.now(),
  },
  // resetPasswordToken: String,
  // resetPasswordExpire: Date,
});

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
