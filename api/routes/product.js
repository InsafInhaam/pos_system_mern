const express = require("express");
const {
  create,
  update,
  deleteProduct,
  view,
  getById,
} = require("../controllers/product");
const router = express.Router();

router.route("/product/create").post(create);

router.route("/product/update/:id").post(update);

router.route("/product/delete/:id").post(deleteProduct);

router.route("/product/").get(view);

router.route("/product/:id").post(getById);

module.exports = router;
