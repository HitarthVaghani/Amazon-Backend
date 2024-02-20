const jwt = require("jsonwebtoken");


//----------------- login JWT creator ---------------//

const createToken = (data) => {
  return jwt.sign(data, process.env.SECRET);
};



//----------------- login authenticator ---------------//

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



//----------------- retrictor for unauthorized request's  ---------------//

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
