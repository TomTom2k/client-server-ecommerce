const router = require('express').Router();
const { getAllBrand, createBrand } = require('../controllers/brandController');

router.get('/', getAllBrand);
router.post('/', createBrand);

module.exports = router;
