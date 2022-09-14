const Client = require("../models/Client");
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
  const client = new Client(req.body);

  try {
    const newProduct = await client.save();

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
  const updateProduct = await Client.findByIdAndUpdate(
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
  deletedProducts = await Client.findByIdAndDelete(req.params.id);

  try {
    res.status(201).json({
      status: "successfully client deleted",
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.getById = async (req, res, next) => {
  const client = await Client.findById(req.params.id);
  try {
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.view = async (req, res, next) => {
  const clients = await Client.find();

  try {
    res.status(201).json(clients);
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};
