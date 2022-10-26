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
  Product.findById(req.params.id).then((product) => {
    (product.name = req.body.name),
      (product.description = req.body.description),
      (product.price = req.body.price),
      (product.category = req.body.category),
      (product.quantity = req.body.quantity),
      (product.weight = req.body.weight),
      (product.color = req.body.color),
      (product.size = req.body.size),
      (product.status = req.body.status),
      (product.discount = req.body.discount),
      (product.tax = req.body.tax),
      (product.dimension = req.body.dimension),
      (product.image = req.file.originalname),
      product
        .save()
        .then(() =>
          res.status(201).json({
            status: "updated successfully",
            data: {
              updateProduct,
            },
          })
        )
        .catch((error) =>
          res.status(500).json({
            status: "Failed",
            message: error,
          })
        );
  });

  // console.log(req.file);
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
