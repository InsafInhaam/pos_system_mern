const express = require("express");
const {
  create,
  update,
  deleteClient,
  view,
  getById,
} = require("../controllers/client");
const router = express.Router();

router.route("/client/create").post(create);

router.route("/client/update/:id").put(update);

router.route("/client/delete/:id").delete(deleteClient);

router.route("/client/").get(view);

router.route("/client/:id").get(getById);

module.exports = router;
