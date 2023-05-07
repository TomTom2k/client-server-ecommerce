const router = require('express').Router();
const brandRoute = require('./brandRoute');
const categoryRoute = require('./categoryRoute');
const productRoute = require('./productRoute');

router.use('/brand', brandRoute);
router.use('/category', categoryRoute);
router.use('/product', productRoute);

router.use('/', (req, res) => {
	res.status(200).json({
		brand: '/brand',
		category: '/category',
		product: '/product',
	});
});

module.exports = router;
