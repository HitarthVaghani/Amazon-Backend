const express = require("express");
const { userController } = require("../controllers");
const { authenticate, restrict } = require("../middleware/auth");

const route = express.Router();



//----------------- user POST, GET, DELETE, PUT route ---------------//

route.post("/register", userController.addUser);
route.post("/login", userController.loginUser);
route.get("/get", userController.getUser);
route.delete("/delete/:id", userController.deleteUser);
route.put("/update/:id", userController.updateUser);
route.get(
  "/profile",
  authenticate,
  restrict(["user"]),
  userController.getProfile
);

module.exports = route;
