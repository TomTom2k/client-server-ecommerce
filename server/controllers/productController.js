const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const Product = require('../models/product');

// [GET] /products
const getAllProduct = async (req, res, next) => {
	try {
		let products = await product.find({});
		return res.status(200).json(products);
	} catch (error) {
		next(error);
	}
};

// [POST] /products
const createProduct = async (req, res, next) => {
	try {
		const files = req.files;
		const newProduct = req.body;
		const product = new Product(newProduct);

		// List of file extensions to convert to WebP
		const fileExtensions = ['png', 'jpg', 'jpeg', 'gif'];

		// loop through the files and convert each PNG image to WebP
		for (let file of files) {
			const filePath = file.path;
			const fileName = file.filename;
			const fileExtension = path.extname(fileName).toLowerCase();

			if (fileExtensions.some((ext) => fileExtension.endsWith(ext))) {
				// Delete the old image file

				// Create a new filename with the WebP extension
				const newFileName = fileName.replace(fileExtension, '.webp');
				const newFilePath = `${path.dirname(filePath)}/${newFileName}`;

				await sharp(filePath)
					.toFormat('webp')
					.toFile(newFilePath)
					.then((buffer) => {
						product.images.push(newFilePath);
						// Delete the original image file
						fs.unlink(filePath, (err) => {
							if (err) {
								next(err);
							}
						});
					})
					.catch((err) => {
						next(err);
					});
			}
		}

		await product.save();
		return res.status(201).json({ product });
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAllProduct,
	createProduct,
};
