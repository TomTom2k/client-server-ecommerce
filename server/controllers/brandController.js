const Brand = require('../models/brand');
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
		const brand = new Brand(newBrand);
		await brand.save();
		return res.status(201).json({ brand: 'CREATE SUCCESS' });
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAllBrand,
	createBrand,
};
