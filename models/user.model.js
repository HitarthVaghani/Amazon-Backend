const mongoose = require("mongoose");



//----------------- simple user model schema ---------------//

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
    required: true,
  },
  lastname: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

const user = mongoose.model("userSchema", userSchema);

module.exports = user;
