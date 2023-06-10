const express = require('express');

const upload = require('../helpers/uploadMiddleware');
const {
	getAllProduct,
	createProduct,
	getProductDetail,
	updateStatus,
	getProductsSubmit,
} = require('../controllers/productController');

const router = express.Router();

router.get('/', getAllProduct);
router.get('/list-submit', getProductsSubmit);
router.get('/:id', getProductDetail);
router.post(
	'/',
	upload.fields([
		{ name: 'images', maxCount: 10 },
		{ name: 'description', maxCount: 1 },
	]),
	createProduct
);
router.patch('/:id', updateStatus);

module.exports = router;
