const mongoose = require("mongoose");

const SettingSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  companyEmail: {
    type: String,
    required: true,
  },
  companyAddress: {
    type: String,
    required: true,
  },
  companyPhone: {
    type: Number,
    required: true,
  },
  industry: {
    type: String,
    required: true,
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

const Setting = mongoose.model("Setting", SettingSchema);

module.exports = Setting;
