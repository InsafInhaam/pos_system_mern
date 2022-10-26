const Customer = require("../models/Customer");

exports.create = async (req, res, next) => {
  // const customer = new Customer({
  //   name: req.body.name,
  //   phone: req.body.description,
  //   email: req.body.price,
  //   address: req.body.category,
  //   companyName: req.body.quantity,
  //   position: req.body.weight,
  //   gender: req.body.color,
  // });

  const customer = new Customer(req.body);

  // console.log(req.file);

  try {
    const newCustomer = await customer.save();

    res.status(201).json({
      status: "success",
      data: {
        newCustomer,
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
  const updateCustomer = await Customer.findByIdAndUpdate(
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
        updateCustomer,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.deleteCustomer = async (req, res, next) => {
  deletedCustomers = await Customer.findByIdAndDelete(req.params.id);

  try {
    res.status(201).json({
      status: "successfully customer deleted",
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.getById = async (req, res, next) => {
  const customer = await Customer.findById(req.params.id);
  try {
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.view = async (req, res, next) => {
  const customers = await Customer.find();

  try {
    res.status(201).json(customers);
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};
