const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./database/db");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();

//connect to DB
connectDB();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", require("./routes/product"));
app.use("/api", require("./routes/category"));
app.use("/api", require("./routes/client"));
app.use("/api", require("./routes/auth"));

app.listen(PORT, () => {
  console.log("listening on port:" + PORT);
});
