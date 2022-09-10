const Category = require("../models/Category");

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
    const category = new Category(req.body);
  
    try {
      const newCategory = await category.save();
  
      res.status(201).json({
        status: "success",
        data: {
          newCategory,
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
    const updateCategory = await Category.findByIdAndUpdate(
      req.params.id,{
        $set:req.body
      },
      {
        new: true
      }

    )

    try {
      res.status(201).json({
        status: "updated successfully",
        data: {
          updateCategory,
        },
      });
    } catch (error) {
      res.status(500).json({
        status: "Failed",
        message: error,
      });
    }
  };

  exports.deleteCategory = async (req, res, next) => {
    deletedCategory = await Category.findByIdAndDelete(req.params.id);
  
    try {
      res.status(201).json({
        status: "successfully category deleted",
      });
    } catch (error) {
      res.status(500).json({
        status: "Failed",
        message: error,
      });
    }
  };
  
  exports.getById = async (req, res, next) => {
    const category = await Category.findById(req.params.id);
    try {
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({
        status: "Failed",
        message: error,
      });
    }
  };
  
  exports.view = async (req, res, next) => {
    const category = await Category.find();
  
    try {
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({
        status: "Failed",
        message: error,
      });
    }
  };