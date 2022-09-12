const express = require('express');
const router = express.Router();

const { register, login, forgotPassword,resetPassword } = require('../controllers/auth');

router.route("/auth/register").post(register);
router.route("/auth/login").post(login);
router.route("/auth/forgotPassword").post(forgotPassword);
router.route("/auth/resetPassword/:resetToken").put(resetPassword);

module.exports = router;