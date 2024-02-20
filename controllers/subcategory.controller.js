const { subcategoryService } = require("../services");


//----------------- add request to add new subcategory ---------------//

const addSubcategory = async (req, res) => {
  try {
    console.log(req.body);

    const body = req.body;

    const subcategory = await subcategoryService.addSubcategory(body);

    res.status(201).json({
      message: "the subcategory added successfully",
      data: subcategory,
    });
  } catch (err) {
    res.status(500).json({
      Error: err,
    });
  }
};


//----------------- get request to get all the subcategorys ---------------//

const getSubcategory = async (req, res) => {
  try {
    const subcategory = await subcategoryService.getSubcategory();

    res.status(200).json({
      message: "the subcategory get successfully",
      data: subcategory,
    });
  } catch (err) {
    res.status(500).json({
      Error: err,
    });
  }
};


//----------------- delete request to delete subcategory ---------------//

const deleteSubcategory = async (req, res) => {
  try {
    console.log(req.params.id);

    const id = req.params.id;

    const subcategory = await subcategoryService.deleteSubcategory(id);

    res.status(201).json({
      message: "the subcategory deleted successfully",
      data: subcategory,
    });
  } catch (err) {
    res.status(500).json({
      Error: err,
    });
  }
};



//----------------- update request to edit subcategory ---------------//

const updateSubcategory = async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body);

    const body = req.body;
    const id = req.params.id;

    const subcategory = await subcategoryService.updateSubcategory(id, body);

    res.status(200).json({
      message: "the subcategory update successfully",
      data: subcategory,
    });
  } catch (err) {
    res.status(500).json({
      Error: err,
    });
  }
};

module.exports = {
  addSubcategory,
  getSubcategory,
  deleteSubcategory,
  updateSubcategory,
};
