const { createToken, authenticate } = require("../middleware/auth");
const { userService } = require("../services");

const addUser = async (req, res) => {
  try {
    console.log(req.body);

    const body = req.body;

    const userExist = await userService.userExist(body.email);

    if (userExist) {
      res.status(400).json({
        message: "this email already in use",
      });
    } else {
      const user = await userService.addUser(body);

      res.status(201).json({
        message: "User added succesfully",
        data: user,
      });
    }
  } catch (err) {
    res.status(500).json({
      Error: err,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userService.getUser();

    res.status(200).json({
      message: "User get succesfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      Error: err,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    console.log(req.params);

    const id = req.params.id;

    const user = await userService.deleteUser(id);

    res.status(201).json({
      message: "User deleted succesfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      Error: err,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    console.log(req.params);
    console.log(req.body);

    const id = req.params.id;
    const body = req.body;

    const user = await userService.updateUser(id, body);

    res.status(200).json({
      message: "User updated succesfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      Error: err,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userService.userExist(email);

    console.log(user);

    if (!user) {
      res.status(400).json({
        message: "The user not found",
      });
    } else {
      if (user.password === password) {
        let data = {
          _id: user._id,
          email: user.email,
          role: user.role,
        };

        let token = createToken(data);
        console.log(token);

        res.cookie("token", token);

        res.status(200).json({ message: "login success" });
      } else {
        res.status(400).json({
          message: "password invalid",
        });
      }
    }
  } catch (err) {
    res.status(500).json({
      Error: err,
    });
  }
};

const getProfile = (req, res) => {
  const user = req.user;
  res.status(200).json({
    message: "profile get success",
    data: user,
  });
};

module.exports = {
  addUser,
  getUser,
  deleteUser,
  updateUser,
  loginUser,
  getProfile,
};
