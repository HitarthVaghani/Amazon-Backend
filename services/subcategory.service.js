const { subcategorySchema } = require("../models");



//----------------- add request to add new subcategory ---------------//

const addSubcategory = (body) => {
  const subcategory = new subcategorySchema({
    subcategoryname: body.subcategoryname,
    desc: body.desc,
    category: body.category,
  });

  return subcategory.save(body);
};



//----------------- get request to get all subcategorys ---------------//

const getSubcategory = () => {
  return subcategorySchema.find().populate("category");
};


//----------------- delete request to delete subcategory ---------------//

const deleteSubcategory = (id) => {
  return subcategorySchema.findByIdAndDelete(id).populate("category");
};



//----------------- update request to edit subcategorys data ---------------//

const updateSubcategory = (id, body) => {
  return subcategorySchema.findByIdAndUpdate(id, body).populate("category");
};

module.exports = {
  addSubcategory,
  getSubcategory,
  deleteSubcategory,
  updateSubcategory,
};
