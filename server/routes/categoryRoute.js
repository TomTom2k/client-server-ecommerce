const router = require('express').Router();

const {
	getAllCategory,
	createCategory,
	deleteCategory,
} = require('../controllers/categoryController');

const { authRoute } = require('../middleware/auth');
const passport = require('passport');
const { schemas, validateParam } = require('../helpers/routerHelpers');

router.get('/', getAllCategory);
router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	authRoute(['staff', 'admin']),
	createCategory
);
router.delete(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	authRoute(['staff', 'admin']),
	validateParam(schemas.idSchema, 'id'),
	deleteCategory
);

module.exports = router;
