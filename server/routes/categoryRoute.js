const router = require('express').Router();

const {
	createCategory,
	deleteCategory,
	getAllCategory,
	updateCategory,
} = require('../controllers/categoryController');
const { authRoute } = require('../middleware/auth');
const passport = require('passport');
const { schemas, validateParam } = require('../helpers/routerHelpers');

router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	authRoute(['staff', 'admin']),
	createCategory
);
router.get('/', getAllCategory);
router.patch(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	authRoute(['staff', 'admin']),
	validateParam(schemas.idSchema, 'id'),
	updateCategory
);
router.delete(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	authRoute(['staff', 'admin']),
	validateParam(schemas.idSchema, 'id'),
	deleteCategory
);

module.exports = router;
