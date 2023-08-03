const fs = require('fs');
const path = require('path');
const Brand = require('../models/brand');
const Product = require('../models/product');

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
		return res.status(201).json({
			message: 'Brand created successfully',
			order: brand,
		});
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
		return res.status(201).json({ message: 'Brand deleted successfully' });
	} catch (error) {
		next(error);
	}
};

// [GET] /brand
const getAllBrand = async (req, res, next) => {
	try {
		const brands = await Brand.find({});
		return res
			.status(200)
			.json({ message: 'Brand fetched successfully', brands });
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

		brand = await Brand.findByIdAndUpdate(id, body);
		return res
			.status(201)
			.json({ message: 'Brand updated successfully', brand });
	} catch (error) {
		next(error);
	}
};

module.exports = {
	createBrand,
	deleteBrand,
	getAllBrand,
	updateBrand,
};
