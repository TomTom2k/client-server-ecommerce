const router = require('express').Router();

const upload = require('../helpers/uploadMiddleware');
const {
	getAllBrand,
	createBrand,
	updateBrand,
	deleteBrand,
} = require('../controllers/brandController');

router.get('/', getAllBrand);
router.post('/', upload.single('description'), createBrand);
router.patch('/:id', updateBrand);
router.delete('/:id', deleteBrand);

module.exports = router;
