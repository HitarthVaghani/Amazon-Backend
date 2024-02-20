const mongoose = require("mongoose");



//----------------- simple subcategory model schema ---------------//

const subcategorySchema = new mongoose.Schema({
  subcategoryname: {
    type: String,
    trim: true,
    required: true,
  },
  desc: {
    type: String,
    trim: true,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categorySchema",
  },
});

const subcategory = mongoose.model("subcategorySchema", subcategorySchema);

module.exports = subcategory;
