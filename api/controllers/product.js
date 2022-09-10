const Product = require("../models/Product");
// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "./client/public/uploads/");
//   },
//   filename: (req, file, callback) => {
//     callback(null, file.originalname);
//   },
// });

exports.create = async (req, res, next) => {
  const product = new Product(req.body);

  try {
    const newProduct = await product.save();

    res.status(201).json({
      status: "success",
      data: {
        newProduct,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.update = async (req, res, next) => {
  const updateProduct = new Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  try {
    res.status(200).json({
      status: "updated successfully",
      data: {
        updateProduct,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.deleteProduct = async (req, res, next) => {
  await Product.findByIdAndDelete(req.params.id);

  try {
    res.status(204).json({
      status: "successfully product deleted",
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.getById = async (req, res, next) => {};

exports.view = async (req, res, next) => {
  const products = await Product.find();

  try {
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};
