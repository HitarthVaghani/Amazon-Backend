const express = require("express");

const routes = express.Router();

const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const subcategoryRoute = require("./subcategory.route");


//----------------- user route ---------------//

routes.use("/user", userRoute);


//----------------- category route ---------------//

routes.use("/category", categoryRoute);


//----------------- subcategory route ---------------//

routes.use("/subcategory", subcategoryRoute);

module.exports = routes;
