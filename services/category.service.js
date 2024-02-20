const { categorySchema } = require("../models");

const categoryExist = (category) => {
  return categorySchema.findOne({ category });
};

const addCategory = (body) => {
  const category = new categorySchema({
    categoryname: body.categoryname,
    desc: body.desc,
  });

  return category.save(body);
};

const getCategory = () => {
  return categorySchema.find();
};

const deleteCategory = (id) => {
  return categorySchema.findByIdAndDelete(id);
};

const updateCategory = (id, body) => {
  return categorySchema.findByIdAndUpdate(id, body);
};

module.exports = {
  categoryExist,
  addCategory,
  getCategory,
  deleteCategory,
  updateCategory,
};
