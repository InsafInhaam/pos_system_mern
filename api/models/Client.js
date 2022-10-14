const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
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
  bussinessName: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  bussinessEmail: {
    type: String,
    required: true,
  },
  bussinessAddress: {
    type: String,
    required: true,
  },
  bussinessPhone: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  postDate: {
    type: Date,
    default: Date.now(),
  },
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
