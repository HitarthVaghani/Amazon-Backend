const express = require("express");

const routes = express.Router();

const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const subcategoryRoute = require("./subcategory.route");

routes.use("/user", userRoute);
routes.use("/category", categoryRoute);
routes.use("/subcategory", subcategoryRoute);

module.exports = routes;
