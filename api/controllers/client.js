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
    const newClient = await client.save();

    res.status(201).json({
      status: "success",
      data: {
        newClient,
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
  const updateClient = await Client.findByIdAndUpdate(
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
        updateClient,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.deleteClient = async (req, res, next) => {
  deletedClients = await Client.findByIdAndDelete(req.params.id);

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
