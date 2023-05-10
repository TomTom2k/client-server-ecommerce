const router = require('express').Router();
const {
	getAllCategory,
	createCategory,
	deleteCategory,
} = require('../controllers/categoryController');

router.get('/', getAllCategory);
router.post('/', createCategory);
router.delete('/:id', deleteCategory);

module.exports = router;
