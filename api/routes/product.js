const express = require("express");
const {
  create,
  update,
  deleteProduct,
  view,
  getById,
} = require("../controllers/product");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../client/public/uploads/products");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/product/create", upload.single("image"), create);

router.route("/product/update/:id").put(update);

router.route("/product/delete/:id").delete(deleteProduct);

router.route("/product/").get(view);

router.route("/product/:id").get(getById);

module.exports = router;
