const express = require("express");
const {
  create,
  update,
  deleteProduct,
  view,
  getById,
} = require("../controllers/setting");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../client/public/uploads/settings");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/setting/create", upload.single("image"), create);

router.put("/setting/update/:id", upload.single("image"), update);

router.route("/setting/delete/:id").delete(deleteProduct);

router.route("/setting/").get(view);

router.route("/setting/:id").get(getById);

module.exports = router;
