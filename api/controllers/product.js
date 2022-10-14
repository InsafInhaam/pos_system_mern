const Product = require("../models/Product");

exports.create = async (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    quantity: req.body.quantity,
    weight: req.body.weight,
    color: req.body.color,
    size: req.body.size,
    status: req.body.status,
    discount: req.body.discount,
    tax: req.body.tax,
    dimension: req.body.dimension,
    image: req.file.originalname,
  });

  console.log(req.file);

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
  const updateProduct = await Product.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    {
      new: true,
    }
  );

  try {
    res.status(201).json({
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
  deletedProducts = await Product.findByIdAndDelete(req.params.id);

  try {
    res.status(201).json({
      status: "successfully product deleted",
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.getById = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  try {
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.view = async (req, res, next) => {
  const products = await Product.find();

  try {
    res.status(201).json(products);
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};
