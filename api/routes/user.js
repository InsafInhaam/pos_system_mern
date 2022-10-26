const express = require("express");
const router = express.Router();

const {
  //   create,
  //   update,
  //   deleteAdmin,
  //   view,
  //   getById,
  login,
  register,
} = require("../controllers/user");

router.route("/user/register").post(register);

router.route("/user/login").post(login);

// router.route("/user/create").post(create);

// router.route("/user/update/:id").put(update);

// router.delete("/user/delete/:id", deleteAdmin);

// router.get("/user/", view);

// router.get("/user/:id", getById);

module.exports = router;
