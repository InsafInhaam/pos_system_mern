const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URL);

  console.log("MongoDB database connection established successfully");
};

module.exports = connectDB;
