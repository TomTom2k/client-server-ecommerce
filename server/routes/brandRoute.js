const router = require('express').Router();
const multer = require('multer');

const upload = require('../helpers/uploadFileMiddleware');
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
