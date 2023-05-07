const Category = require('../models/category');
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
		return res.status(201).json({ Category: 'CREATE SUCCESS' });
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAllCategory,
	createCategory,
};
