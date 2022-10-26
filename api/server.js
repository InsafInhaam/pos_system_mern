const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./database/db");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cookieParser());
dotenv.config();

//connect to DB
connectDB();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", require("./routes/product"));
app.use("/api", require("./routes/category"));
app.use("/api", require("./routes/client"));
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/order"));
app.use("/api", require("./routes/customer"));
app.use("/api", require("./routes/user"));

app.listen(PORT, () => {
  console.log("listening on port:" + PORT);
});
