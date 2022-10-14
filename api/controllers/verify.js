const jwt = require("jsonwebtoken");

exports.verifyToken = async (req, res, next) => {
  const cookies = req.headers.cookie;
  const token = cookies.split("=")[1];
  //   console.log(token);
  if (!token) {
    res.status(400).json({ errorMessage: "No token provided." });
  }
  jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, admin) => {
    if (err) {
      res.status(500).json({ errorMessage: "Invalid token" });
    }
    // console.log(admin.id);
    req.id = admin.id;
  });
  next();
};

// exports.refreshToken = async (req, res, next) => {
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

//     const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET_KEY, {
//       expiresIn: "7d",
//     });

//     res.cookie(String(admin._id), token, {
//       path: "/",
//       expiresIn: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//       httpOnly: true,
//       sameSite: "lax",
//     });

//     req.id = admin.id;
//     next();
//   });
// };
