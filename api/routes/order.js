const express = require("express");
const {
  create,
  update,
  deleteOrder,
  getById,
  view,
} = require("../controllers/order");
const router = express.Router();

router.route("/order/create").post(create);

router.route("/order/update/:id").put(update);

router.route("/order/delete/:id").delete(deleteOrder);

router.route("/order/").get(view);

router.route("/order/:id").get(getById);

module.exports = router;
