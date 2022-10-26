const y = require("../models/Setting");

exports.create = async (req, res, next) => {
  const setting = new Setting({
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
    const newSetting = await setting.save();

    res.status(201).json({
      status: "success",
      data: {
        newSetting,
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
  Setting.findById(req.params.id).then((setting) => {
    (setting.name = req.body.name),
      (setting.description = req.body.description),
      (setting.price = req.body.price),
      (setting.category = req.body.category),
      (setting.quantity = req.body.quantity),
      (setting.weight = req.body.weight),
      (setting.color = req.body.color),
      (setting.size = req.body.size),
      (setting.status = req.body.status),
      (setting.discount = req.body.discount),
      (setting.tax = req.body.tax),
      (setting.dimension = req.body.dimension),
      (setting.image = req.file.originalname),
      setting
        .save()
        .then(() =>
          res.status(201).json({
            status: "updated successfully",
            data: {
              updateSetting,
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

exports.deleteSetting = async (req, res, next) => {
  deletedSettings = await Setting.findByIdAndDelete(req.params.id);

  try {
    res.status(201).json({
      status: "successfully setting deleted",
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.getById = async (req, res, next) => {
  const setting = await Setting.findById(req.params.id);
  try {
    res.status(201).json(setting);
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.view = async (req, res, next) => {
  const settings = await Setting.find();

  try {
    res.status(201).json(settings);
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};
