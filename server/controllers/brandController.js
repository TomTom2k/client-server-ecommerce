const path = require('path');

const Brand = require('../models/brand');
const Product = require('../models/product');
// [GET] /brand
const getAllBrand = async (req, res, next) => {
	try {
		const brands = await Brand.find({});
		return res.status(200).json(brands);
	} catch (error) {
		next(error);
	}
};

// [POST] /brand
const createBrand = async (req, res, next) => {
	try {
		const newBrand = req.body;
		const file = req.file;
		const brand = new Brand(newBrand);
		if (file) {
			brand.description = file.path.replace(
				'public\\markdown\\',
				'markdown/'
			);
		}

		await brand.save();
		return res.status(201).json({ brand: 'CREATE SUCCESS' });
	} catch (error) {
		next(error);
	}
};

// [PATCH] /brand/:id
const updateBrand = async (req, res, next) => {
	try {
		const id = req.params.id;
		const body = req.body;
		await Brand.findByIdAndUpdate(id, body);
		return res.status(201).json({ brand: 'UPDATE SUCCESS' });
	} catch (error) {
		next(error);
	}
};

// [DELETE] /brand/:id
const deleteBrand = async (req, res, next) => {
	try {
		let id = req.params.id;
		await Brand.findByIdAndRemove(id);

		await Product.deleteMany({ brand: id });
		return res.status(201).json({ brand: 'DELETE SUCCESS' });
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAllBrand,
	createBrand,
	updateBrand,
	deleteBrand,
};
