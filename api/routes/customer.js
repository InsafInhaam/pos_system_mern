const express = require("express");
const {
  create,
  update,
  deleteCustomer,
  view,
  getById,
} = require("../controllers/customer");
const router = express.Router();
// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "../client/public/uploads/customers");
//   },
//   filename: (req, file, callback) => {
//     callback(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

router.post("/customer/create", create);

router.put("/customer/update/:id", update);

router.route("/customer/delete/:id").delete(deleteCustomer);

router.route("/customer/").get(view);

router.route("/customer/:id").get(getById);

module.exports = router;
