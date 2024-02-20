const mongoose = require("mongoose");


//----------------- simple category model schema ---------------//

const categorySchema = new mongoose.Schema({
  categoryname: {
    type: String,
    trim: true,
    required: true,
  },
  desc: {
    type: String,
    trim: true,
    required: true,
  },
});

const category = mongoose.model("categorySchema", categorySchema);

module.exports = category;
