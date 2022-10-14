const express = require("express");
const router = express.Router();

const {
  create,
  update,
  deleteAdmin,
  view,
  getById,
  login,
  forgotPassword,
  resetPassword,
  logout,
  getAdminLogeedin,
} = require("../controllers/auth");
const { verifyToken, refreshToken } = require("../controllers/verify");

router.route("/auth/login").post(login);

router.route("/auth/forgotPassword").post(forgotPassword);

router.route("/auth/resetPassword/:resetToken").put(resetPassword);

router.route("/auth/create").post(create);

router.route("/auth/update/:id").put(update);

router.delete("/auth/delete/:id", deleteAdmin);

router.get("/auth/", view);

router.get("/auth/:id", getById);

// router.post("/logout", logout);

// router.get("/refresh", refreshToken, verifyToken, getAdminLogeedin);

// router.get("/getadminlogged", verifyToken, getAdminLogeedin);

module.exports = router;
