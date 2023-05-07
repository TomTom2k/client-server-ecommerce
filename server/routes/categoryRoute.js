const router = require('express').Router();
const {
	getAllCategory,
	createCategory,
} = require('../controllers/categoryController');

router.get('/', getAllCategory);
router.post('/', createCategory);

module.exports = router;
