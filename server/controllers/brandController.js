const fs = require('fs');
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
		return res.status(201).json({ brand });
	} catch (error) {
		next(error);
	}
};

// [PATCH] /brand/:id
const updateBrand = async (req, res, next) => {
	try {
		const { id } = req.value.params;
		const body = req.body;
		const file = req.file;

		// get brand from database
		const brand = await Brand.findById(id);

		// Check if there are file uploads
		if (file) {
			// Delete the description file if it exists
			if (brand.description) {
				fs.unlink(
					path.join(__dirname, '..', 'public', brand.description),
					(err) => {
						if (err) {
							console.error(err);
							return;
						}
					}
				);
			}

			// Update file path in description field
			body.description = file.path.replace(
				'public\\markdown\\',
				'markdown/'
			);
		}

		await Brand.findByIdAndUpdate(id, body);
		return res.status(201).json({ brand: 'UPDATE SUCCESS' });
	} catch (error) {
		next(error);
	}
};

// [DELETE] /brand/:id
const deleteBrand = async (req, res, next) => {
	try {
		const { id } = req.value.params;

		await Brand.findByIdAndRemove(id);
		// The product will be deleted when the brand is no longer available
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
