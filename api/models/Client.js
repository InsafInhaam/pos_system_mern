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
  },
  position: {
    type: String,
    required: true,
  },
  bussinessEmail: {
    type: Number,
  },
  bussinessAddress: {
    type: String,
  },
  bussinessPhone: {
    type: Number,
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

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
