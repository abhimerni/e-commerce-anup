const {newCategoryService, deleteCategory, editCategory, getOneCategorybyId, getAllCategorys} = require("../services/category.service");
  
  const newCategory = async (req, res) => {
	const { name } = req.body;
	console.log('name', name)
	try {
	  const newCategory = await newCategoryService(name);
	  console.log('newCategory', newCategory)
	  const saveCategory = await newCategory.save();
	  res.status(200).json(saveCategory);
	} catch (error) {
	  res.status(500).json({error, message:"something error happens"});
	}
  };
  
  const getAllCategory = async (req, res) => {
	try {
	  const allCategory = await getAllCategorys();
	  res.status(200).json(allCategory);
	} catch (error) {
	  res.status(500).json(error);
	}
  };
  
  const deleteCategorys = async (req, res) => {
	try {
	  const id = req.params.id;
	  const category = await deleteCategory(id);
	  res
		.status(200)
		.json({ message: "Course is deleted successfully...", category });
	} catch (error) {}
  };
  
  const getOneCategorybyIds = async (req, res) => {
	try {
	  const id = req.params.id;
	  const category = await this.getOnePostbyIds(id);
	  res
		.status(200)
		.json( category);
	} catch (error) {}
  };
  
  module.exports = {
	newCategory, deleteCategorys, getOneCategorybyIds,getAllCategory
  };
  