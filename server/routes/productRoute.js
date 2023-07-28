const express = require('express');

const upload = require('../middleware/uploadMiddleware');
const {
	getAllProduct,
	createProduct,
	getProductDetail,
	updateStatus,
	getProductsSubmit,
} = require('../controllers/productController');
const { authRoute } = require('../middleware/auth');
const passport = require('passport');
const { schemas, validateParam } = require('../helpers/routerHelpers');

const router = express.Router();

router.get(
	'/',
	passport.authenticate('jwt', { session: false }),
	authRoute(['staff', 'admin']),
	getAllProduct
);
router.get('/list-submit', getProductsSubmit);
router.get('/:id', validateParam(schemas.idSchema, 'id'), getProductDetail);
router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	authRoute(['staff', 'admin']),
	upload.fields([
		{ name: 'images', maxCount: 10 },
		{ name: 'description', maxCount: 1 },
	]),
	createProduct
);
router.patch(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	authRoute(['staff', 'admin']),
	validateParam(schemas.idSchema, 'id'),
	updateStatus
);

module.exports = router;
