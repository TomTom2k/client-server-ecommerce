const express = require('express');

const upload = require('../helpers/uploadImageMiddleware');
const {
	getAllProduct,
	createProduct,
} = require('../controllers/productController');

const router = express.Router();

router.get('/', getAllProduct);
router.post('/', upload.array('images', 10), createProduct);

module.exports = router;
