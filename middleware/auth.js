const jwt = require("jsonwebtoken");

const createToken = (data) => {
  return jwt.sign(data, process.env.SECRET);
};

const authenticate = (req, res, next) => {
  const token = req.cookies["token"];

  // console.log(token);

  if (!token) {
    res.status(400).json({
      message: "!Opps  you are not login ",
    });
  } else {
    const user = jwt.verify(token, process.env.SECRET);

    console.log(user);

    req.user = user;

    next();
  }
};

const restrict = (...data) => {
  return (req, res, next) => {
    let user = req.user;

    // console.log(user, "user");

    if (data[0].includes(user.role)) {
      next();
    } else {
      res.status(400).json({
        message: "permission denied",
      });
    }
  };
};

module.exports = { createToken, authenticate, restrict };
