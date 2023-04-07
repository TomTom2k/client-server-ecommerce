const router = require('express').Router();
const brandRoute = require('./brandRoute');
const productRoute = require('./productRoute');

router.use('/brand', brandRoute);
router.use('/product', productRoute);

router.use('/', (req, res) => {
	res.status(200).json({
		brand: '/brand',
		product: '/product',
	});
});

module.exports = router;
