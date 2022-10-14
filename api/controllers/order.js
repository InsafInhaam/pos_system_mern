const Order = require("../models/Order");

exports.create = async (req, res, next) => {
  const order = new Order(req.body);

  try {
    const newOrder = await order.save();

    res.status(201).json({
      successMessage: "Order created successfully",
      newOrder,
    });
  } catch (error) {
    res.status(500).json({
      errorMessage: "Order created unsuccessfully",
      message: error,
    });
  }
};

exports.update = async (req, res, next) => {
  const updateOrder = await Order.findByIdAndUpdate(
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
        updateOrder,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.deleteOrder = async (req, res, next) => {
  deletedOrders = await Order.findByIdAndDelete(req.params.id);

  try {
    res.status(201).json({
      status: "successfully order deleted",
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.getById = async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  try {
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.view = async (req, res, next) => {
  const orders = await Order.find();

  try {
    res.status(201).json(orders);
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};
