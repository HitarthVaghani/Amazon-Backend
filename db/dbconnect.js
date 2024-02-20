const mongoose = require("mongoose");



//----------------- This is mongoDB server connection ---------------//

const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/flipkart")
    .then(() => {
      console.log("database connection successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
