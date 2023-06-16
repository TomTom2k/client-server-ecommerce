const router = require('express').Router();

const {
	getAllCategory,
	createCategory,
	deleteCategory,
} = require('../controllers/categoryController');

const { schemas, validateParam } = require('../helpers/routerHelpers');

router.get('/', getAllCategory);
router.post('/', createCategory);
router.delete('/:id', validateParam(schemas.idSchema, 'id'), deleteCategory);

module.exports = router;
