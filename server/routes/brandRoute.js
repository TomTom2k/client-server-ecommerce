const router = require('express').Router();

const {
	getAllBrand,
	createBrand,
	updateBrand,
	deleteBrand,
} = require('../controllers/brandController');
require('../middleware/passport');

const upload = require('../middleware/uploadMiddleware');
const { authRoute } = require('../middleware/auth');
const passport = require('passport');
const { schemas, validateParam } = require('../helpers/routerHelpers');

router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	authRoute(['staff', 'admin']),
	upload.single('description'),
	createBrand
);
router.get('/', getAllBrand);
router.patch(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	authRoute(['staff', 'admin']),
	validateParam(schemas.idSchema, 'id'),
	upload.single('description'),
	updateBrand
);
router.delete(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	authRoute(['staff', 'admin']),
	validateParam(schemas.idSchema, 'id'),
	deleteBrand
);

module.exports = router;
