const express = require("express");
const { categoryController } = require("../controllers");

const route = express.Router();

route.post("/add", categoryController.addCategory);
route.get("/get", categoryController.getCategory);
route.delete("/delete/:id", categoryController.deleteCategory);
route.put("/update/:id", categoryController.updateCategory);

module.exports = route;
