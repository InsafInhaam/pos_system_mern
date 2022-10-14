const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// exports.register = async (req, res, next) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.create({
//       email,
//       password,
//     });

//     res.status(201).json({
//       success: true,
//       Admin,
//     });
//   } catch (error) {
//     reset.status(500).json({
//       success: false,
//       error: error.message,
//     });
//   }
// };

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingAdmin;
  try {
    existingAdmin = await Admin.findOne({ email: email });
    // console.log(existingAdmin);
  } catch (error) {
    return new Error(error);
  }

  if (!existingAdmin) {
    return res
      .status(400)
      .json({ errorMessage: "Admin not found, contact your administration!" });
  }

  const isPasswordCorrect = bcrypt.compareSync(
    password,
    existingAdmin.password
  );

  if (!isPasswordCorrect) {
    return res.status(400).json({ errorMessage: "Invalid Email or Password!" });
  }
  const token = jwt.sign(
    { id: existingAdmin._id },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "7d",
    }
  );

  res.cookie(String(existingAdmin._id), token, {
    path: "/",
    expiresIn: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: "lax",
  });

  return res.status(200).json({
    successMessage: "Successfully logged in!",
    admin: existingAdmin,
    token,
  });
};

exports.create = async (req, res, next) => {
  const admin = new Admin(req.body);
  let existingAdmin;

  try {
    existingAdmin = await Admin.findOne({ email: req.body.email });
  } catch (error) {
    console.log(error);
  }

  if (existingAdmin) {
    return res.status(400).json({ errorMessage: "Admin already exists." });
  }

  const salt = bcrypt.genSaltSync(10);

  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  admin.password = hashedPassword;

  try {
    const newAdmin = await admin.save();

    res.status(201).json({
      successMessage: "Admin created successfully",
      newAdmin,
    });
  } catch (error) {
    res.status(500).json({
      errorMessage: "Admin created unsuccessfully",
    });
  }
};

exports.update = async (req, res, next) => {
  const salt = await bcrypt.genSaltSync(10);
  req.body.password = await bcrypt.hashSync(req.body.password, salt);

  const updateAdmin = await Admin.findByIdAndUpdate(
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
      successMessage: "Updated admin successfully",
      updateAdmin,
    });
  } catch (error) {
    res.status(500).json({
      errorMessage: "Updated admin unsuccessfully",
      message: error,
    });
  }
};

exports.deleteAdmin = async (req, res, next) => {
  deletedAdmins = await Admin.findByIdAndDelete(req.params.id);

  try {
    res.status(201).json({
      successMessage: "successfully admin deleted",
    });
  } catch (error) {
    res.status(500).json({
      errorMessage: "Admin deleted unsuccessfully",
      message: error,
    });
  }
};

exports.getById = async (req, res, next) => {
  const admin = await Admin.findById(req.params.id, { password: 0 });
  try {
    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.view = async (req, res, next) => {
  const admins = await Admin.find({}, { password: 0 });

  try {
    res.status(201).json(admins);
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};

// exports.getAdminLogeedin = async (req, res, next) => {
//   const adminId = req.id;
//   let admin;
//   try {
//     admin = await User.findById(adminId, "-password");
//   } catch (error) {
//     return new Error(error);
//   }

//   if (!admin) {
//     return res.status(400).json({ successMessage: "Admin not found" });
//   }
//   return res.status(200).json({ admin });
// };

// exports.logout = (req, res, next) => {
//   const cookies = req.headers.cookie;
//   const prevToken = cookies.split("=")[1];

//   if (!prevToken) {
//     return res.status(400).json({ errorMessage: "Couldn't find token" });
//   }
//   jwt.verify(String(prevToken), process.env.JWT_SECRET_KEY, (err, admin) => {
//     if (err) {
//       console.log(err);
//       return res.status(403).json({ errorMessage: "Authentication failed" });
//     }

//     res.clearCookie(`${admin.id}`);
//     req.cookies[`${admin.id}`] = "";

//     return res.status(200).json({ successMessage: "Successfully logout out" });
//   });
// };

exports.forgotPassword = (req, res, next) => {
  res.send("Forgot Password Route");
};

exports.resetPassword = (req, res, next) => {
  res.send("Reset Password Route");
};
