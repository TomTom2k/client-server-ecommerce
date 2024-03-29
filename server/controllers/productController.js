const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const Product = require('../models/product');

// [POST] /product
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
		return res
			.status(201)
			.json({ message: 'Product created successfully', product });
	} catch (error) {
		next(error);
	}
};

// [GET] /product
const getAllProduct = async (req, res, next) => {
	try {
		let products = await Product.find({})
			.populate('brand', 'title')
			.populate('category', 'name')
			.select('title images price stock brand category status rating');
		return res
			.status(200)
			.json({ message: 'Products fetched successfully', products });
	} catch (error) {
		next(error);
	}
};

// [GET] /product/list-submit
const getProductsSubmit = async (req, res, next) => {
	try {
		const title = req.query.q || '';
		let products = await Product.find({
			title: { $regex: title, $options: 'i' },
			status: 'ACCEPT',
		})
			.populate('brand', 'title')
			.populate('category', 'name')
			.select('title images price stock brand category status rating');
		return res
			.status(200)
			.json({ message: 'Product fetched successfully', products });
	} catch (error) {
		next(error);
	}
};

// [GET] /product/:id
const getProductDetail = async (req, res, next) => {
	try {
		let { id } = req.value.params;
		let product = await Product.findById(id)
			.populate('brand')
			.populate('category');
		return res
			.status(200)
			.json({ message: 'Product fetched successfully', product });
	} catch (error) {
		next(error);
	}
};

// [GET] /product/search
const searchProduct = async (req, res, next) => {
	try {
		const { keyword, minPrice, maxPrice, category, brand } = req.query;

		const filter = {};

		if (keyword) {
			filter.title = { $regex: keyword, $options: 'i' }; // case insensitive search in title
		}

		if (minPrice || maxPrice) {
			filter.price = {};
			if (minPrice) {
				filter.price.$gte = minPrice;
			}
			if (maxPrice) {
				filter.price.$lte = maxPrice;
			}
		}

		if (category) {
			filter.category = mongoose.Types.ObjectId(category); // converting string to ObjectId
		}

		if (brand) {
			filter.brand = mongoose.Types.ObjectId(brand); // converting string to ObjectId
		}
		filter.status = 'ACCEPT';
		const products = await Product.find(filter)
			.populate('brand', 'title')
			.populate('category', 'name')
			.select('title images price stock brand category status rating');
		res.json({ message: 'Product fetched successfully', products });
	} catch (err) {
		next(err);
	}
};

// [PATCH] /product/:id
const updateStatus = async (req, res, next) => {
	try {
		const { id } = req.value.params;
		const body = req.body;

		const product = await Product.findByIdAndUpdate(id, body);
		return res
			.status(201)
			.json({ message: 'Product update successfully', product });
	} catch (error) {
		next(error);
	}
};

module.exports = {
	createProduct,
	getAllProduct,
	getProductsSubmit,
	getProductDetail,
	searchProduct,
	updateStatus,
};
