const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const Product = require('../models/product');

// [GET] /products
const getAllProduct = async (req, res, next) => {
	try {
		let products = await Product.find({})
			.populate('brand', 'title')
			.populate('category', 'name')
			.select('title images price stock brand category status');
		return res.status(200).json(products);
	} catch (error) {
		next(error);
	}
};

// [GET] /products/list-submit
const getProductsSubmit = async (req, res, next) => {
	try {
		const title = req.query.q || '';
		let products = await Product.find({
			title: { $regex: title, $options: 'i' },
			status: 'ACCEPT',
		})
			.populate('brand', 'title')
			.populate('category', 'name')
			.select('title images price stock brand category status');
		return res.status(200).json(products);
	} catch (error) {
		next(error);
	}
};

// [GET] /products/:id
const getProductDetail = async (req, res, next) => {
	try {
		let { id } = req.values.params;
		let product = await Product.findById(id)
			.populate('brand')
			.populate('category');
		return res.status(200).json(product);
	} catch (error) {
		next(error);
	}
};

// [POST] /products
const createProduct = async (req, res, next) => {
	try {
		const description = req.files.description;
		const images = req.files.images;
		const newProduct = req.body;
		const product = new Product(newProduct);

		// List of file extensions to convert to WebP
		const fileExtensions = ['png', 'jpg', 'jpeg', 'gif'];

		// loop through the files and convert each PNG image to WebP
		for (let image of images) {
			const filePath = image.path;
			const fileName = image.filename;
			const fileExtension = path.extname(fileName).toLowerCase();

			if (fileExtensions.some((ext) => fileExtension.endsWith(ext))) {
				// Create a new filename with the WebP extension
				const newFileName = fileName.replace(fileExtension, '.webp');
				const newFilePath = `${path.dirname(filePath)}/${newFileName}`;

				await sharp(filePath)
					.toFormat('webp')
					.toFile(newFilePath)
					.then((buffer) => {
						product.images.push(
							newFilePath.replace('public\\images', 'images')
						);
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

		if (description) {
			product.description = description[0].path.replace(
				'public\\markdown\\',
				'markdown/'
			);
		}

		await product.save();
		return res.status(201).json({ product });
	} catch (error) {
		next(error);
	}
};

// [PATCH] /products/:id
const updateStatus = async (req, res, next) => {
	try {
		const { id } = req.values.params;
		const body = req.body;

		await Product.findByIdAndUpdate(id, body);
		return res.status(201).json("product: 'UPDATE STATUS SUCCESS'");
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAllProduct,
	getProductsSubmit,
	getProductDetail,
	createProduct,
	updateStatus,
};
