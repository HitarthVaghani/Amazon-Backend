require("dotenv").config();
const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db/dbconnect");
const routes = require("./routes");
const cookieParser = require("cookie-parser");

const app = express();

//------------- to add cookies -------------//
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//------------- routes connection -------------//
app.use("/v1", routes);

//------------- database connection -------------//
connectDB();

//------------- server connection -------------//
http.createServer(app).listen(process.env.PORT, () => {
  console.log("server started");
});
