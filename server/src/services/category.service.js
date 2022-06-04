const Category = require("../model/category.model");

const newCategoryService = async (name) => {
  const newCategory = new Category({name});
  return newCategory;
};

const getAllCategorys = async () =>{
	const category = await Category.find()
	return category
}

const deleteCategory = async (id)=>{
	const category = await Category.findByIdAndDelete(id)
	return category
}

const editCategory = async (id)=>{
	const category = await Category.findByIdAndUpdate({id}, {$set:{ name:name}}, {new:true})
	return category
}

const getOneCategorybyId = async (id)=>{
	const category = await Category.findById(id).populate('user', 'username').populate('category', 'name')
	return category
}

module.exports = {
  newCategoryService,
  getAllCategorys,
  deleteCategory,
  getOneCategorybyId,
  editCategory
};
