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

router.route("/product/delete/:id").delete(deleteProduct);

router.route("/product/").get(view);

router.route("/product/:id").get(getById);

module.exports = router;
