const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  const user = new User(req.body);
  let existingUser;
  let existingUserName;

  try {
    existingUser = await User.findOne({ email: req.body.email });
  } catch (error) {
    console.log(error);
  }

  try {
    existingUserName = await User.findOne({ username: req.body.username });
  } catch (error) {
    console.log(error);
  }

  if (existingUser) {
    return res.status(400).json({ errorMessage: "User email already exists." });
  }

  if (existingUserName) {
    return res.status(400).json({ errorMessage: "Username already exists." });
  }

  const salt = bcrypt.genSaltSync(10);

  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  user.password = hashedPassword;

  try {
    const newUser = await user.save();

    res.status(201).json({
      successMessage: "User created successfully",
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      errorMessage: "User created unsuccessfully",
    });
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
    // console.log(existingUser);
  } catch (error) {
    return new Error(error);
  }

  if (!existingUser) {
    return res
      .status(400)
      .json({ errorMessage: "User not found, contact your administration!" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

  if (!isPasswordCorrect) {
    return res.status(400).json({ errorMessage: "Invalid Email or Password!" });
  }
  const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });

  res.cookie(String(existingUser._id), token, {
    path: "/",
    expiresIn: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: "lax",
  });

  return res.status(200).json({
    successMessage: "Successfully logged in!",
    user: existingUser,
    token,
  });
};

// exports.create = async (req, res, next) => {
//   const user = new User(req.body);
//   let existingUser;

//   try {
//     existingUser = await User.findOne({ email: req.body.email });
//   } catch (error) {
//     console.log(error);
//   }

//   if (existingUser) {
//     return res.status(400).json({ errorMessage: "User already exists." });
//   }

//   const salt = bcrypt.genSaltSync(10);

//   const hashedPassword = bcrypt.hashSync(req.body.password, salt);

//   user.password = hashedPassword;

//   try {
//     const newUser = await user.save();

//     res.status(201).json({
//       successMessage: "User created successfully",
//       newUser,
//     });
//   } catch (error) {
//     res.status(500).json({
//       errorMessage: "User created unsuccessfully",
//     });
//   }
// };

// exports.update = async (req, res, next) => {
//   const salt = await bcrypt.genSaltSync(10);
//   req.body.password = await bcrypt.hashSync(req.body.password, salt);

//   const updateUser = await User.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: req.body,
//     },
//     {
//       new: true,
//     }
//   );

//   try {
//     res.status(201).json({
//       successMessage: "Updated user successfully",
//       updateUser,
//     });
//   } catch (error) {
//     res.status(500).json({
//       errorMessage: "Updated user unsuccessfully",
//       message: error,
//     });
//   }
// };

// exports.deleteUser = async (req, res, next) => {
//   deletedUsers = await User.findByIdAndDelete(req.params.id);

//   try {
//     res.status(201).json({
//       successMessage: "successfully user deleted",
//     });
//   } catch (error) {
//     res.status(500).json({
//       errorMessage: "User deleted unsuccessfully",
//       message: error,
//     });
//   }
// };

// exports.getById = async (req, res, next) => {
//   const user = await User.findById(req.params.id, { password: 0 });
//   try {
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(500).json({
//       status: "Failed",
//       message: error,
//     });
//   }
// };

// exports.view = async (req, res, next) => {
//   const users = await User.find({}, { password: 0 });

//   try {
//     res.status(201).json(users);
//   } catch (error) {
//     res.status(500).json({
//       status: "Failed",
//       message: error,
//     });
//   }
// };

// exports.forgotPassword = (req, res, next) => {
//   res.send("Forgot Password Route");
// };

// exports.resetPassword = (req, res, next) => {
//   res.send("Reset Password Route");
// };
