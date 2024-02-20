const { categoryService } = require("../services");


//----------------- add request to add new category ---------------//

const addCategory = async (req, res) => {
  try {
    // console.log(req.body);

    const body = req.body;

    const categoryExist = await categoryService.categoryExist(
      body.categoryname
    );

    if (categoryExist) {
      res.status(400).json({
        message: "this category already exist please try another",
      });
    } else {
      const category = await categoryService.addCategory(body);

      res.status(201).json({
        message: "the category addedd successfully",
        data: category,
      });
    }
  } catch (err) {
    res.status(500).json({
      Error: err,
    });
  }
};


//----------------- get request to get all the categorys --------------//

const getCategory = async (req, res) => {
  try {
    const category = await categoryService.getCategory();

    res.status(200).json({
      message: "the category get successfully",
      data: category,
    });
  } catch (err) {
    res.status(500).json({
      Error: err,
    });
  }
};


//----------------- delete request to delete the category ---------------//


const deleteCategory = async (req, res) => {
  try {
    console.log(req.params);

    const id = req.params.id;

    const category = await categoryService.deleteCategory(id);

    res.status(201).json({
      message: "the category deleted successfully",
      data: category,
    });
  } catch (err) {
    res.status(500).json({
      Error: err,
    });
  }
};



//----------------- update request to edit the category ---------------//

const updateCategory = async (req, res) => {
  try {
    console.log(req.params);
    console.log(req.body);

    const id = req.params.id;
    const body = req.body;

    const category = await categoryService.updateCategory(id, body);

    res.status(200).json({
      message: "the category updated successfully",
      data: category,
    });
  } catch (err) {
    res.status(500).json({
      Error: err,
    });
  }
};

module.exports = { addCategory, getCategory, deleteCategory, updateCategory };
