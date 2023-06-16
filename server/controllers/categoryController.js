const Category = require('../models/category');
const Product = require('../models/product');

// [GET] /Category
const getAllCategory = async (req, res, next) => {
	try {
		const category = await Category.find({});
		return res.status(200).json(category);
	} catch (error) {
		next(error);
	}
};

// [POST] /Category
const createCategory = async (req, res, next) => {
	try {
		const newCategory = req.body;
		const category = new Category(newCategory);

		await category.save();
		return res.status(201).json(category);
	} catch (error) {
		next(error);
	}
};

// [DELETE] /Category/:id
const deleteCategory = async (req, res, next) => {
	try {
		let { id } = req.values.params;

		await Category.findByIdAndRemove(id);
		// delete category field when category is deleted
		await Product.updateMany({ category: id }, { $unset: { category: 1 } });
		return res.status(201).json({ brand: 'DELETE SUCCESS' });
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAllCategory,
	createCategory,
	deleteCategory,
};
