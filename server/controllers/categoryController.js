const category = require('../models/category');
const Category = require('../models/category');
const Product = require('../models/product');

// [POST] /Category
const createCategory = async (req, res, next) => {
	try {
		const newCategory = req.body;
		const category = new Category(newCategory);

		await category.save();
		return res.status(201).json({
			message: 'Category created successfully',
			order: category,
		});
	} catch (error) {
		next(error);
	}
};

// [GET] /Category
const getAllCategory = async (req, res, next) => {
	try {
		const category = await Category.find({});
		return res.status(200).json({
			message: 'Category fetched successfully',
			order: category,
		});
	} catch (error) {
		next(error);
	}
};

// [DELETE] /Category/:id
const deleteCategory = async (req, res, next) => {
	try {
		let { id } = req.value.params;

		await Category.findByIdAndRemove(id);
		// delete category field when category is deleted
		await Product.updateMany({ category: id }, { $unset: { category: 1 } });
		return res
			.status(201)
			.json({ message: 'Category deleted successfully' });
	} catch (error) {
		next(error);
	}
};

// [PATCH] /brand/:id
const updateCategory = async (req, res, next) => {
	try {
		const { id } = req.value.params;
		const body = req.body;

		category = await Brand.findByIdAndUpdate(id, body);
		return res
			.status(201)
			.json({ message: 'Category updated successfully', category });
	} catch (error) {
		next(error);
	}
};

module.exports = {
	createCategory,
	deleteCategory,
	getAllCategory,
	updateCategory,
};
