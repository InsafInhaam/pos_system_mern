const express = require("express");
const {
  create,
  update,
  deleteCategory,
  view,
  getById,
} = require("../controllers/category");
const router = express.Router();

router.route("/category/create").post(create);

router.route("/category/update/:id").put(update);

router.route("/category/delete/:id").delete(deleteCategory);

router.route("/category/").get(view);

router.route("/category/:id").get(getById);

module.exports = router;
