const router = require('express').Router();

const {
	getAllBrand,
	createBrand,
	updateBrand,
	deleteBrand,
} = require('../controllers/brandController');

const upload = require('../helpers/uploadMiddleware');
const { schemas, validateParam } = require('../helpers/routerHelpers');

router.get('/', getAllBrand);
router.post('/', upload.single('description'), createBrand);
router.patch('/:id', validateParam(schemas.idSchema, 'id'), updateBrand);
router.delete('/:id', validateParam(schemas.idSchema, 'id'), deleteBrand);

module.exports = router;
