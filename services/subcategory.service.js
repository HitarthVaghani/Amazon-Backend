const { subcategorySchema } = require("../models");

const addSubcategory = (body) => {
  const subcategory = new subcategorySchema({
    subcategoryname: body.subcategoryname,
    desc: body.desc,
    category: body.category,
  });

  return subcategory.save(body);
};

const getSubcategory = () => {
  return subcategorySchema.find().populate("category");
};

const deleteSubcategory = (id) => {
  return subcategorySchema.findByIdAndDelete(id).populate("category");
};

const updateSubcategory = (id, body) => {
  return subcategorySchema.findByIdAndUpdate(id, body).populate("category");
};

module.exports = {
  addSubcategory,
  getSubcategory,
  deleteSubcategory,
  updateSubcategory,
};
