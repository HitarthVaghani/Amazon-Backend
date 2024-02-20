const { categorySchema } = require("../models");


//----------------- categoryExist to check email was registered or not ---------------//

const categoryExist = (category) => {
  return categorySchema.findOne({ category });
};



//----------------- add request to add new category ---------------//

const addCategory = (body) => {
  const category = new categorySchema({
    categoryname: body.categoryname,
    desc: body.desc,
  });

  return category.save(body);
};


//----------------- get request to get all categorys ---------------//

const getCategory = () => {
  return categorySchema.find();
};



//----------------- delete request to delete category ---------------//

const deleteCategory = (id) => {
  return categorySchema.findByIdAndDelete(id);
};



//----------------- update request to edit category data ---------------//

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
