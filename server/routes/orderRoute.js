const express = require('express');
const passport = require('passport');
const router = express.Router();
const {
	createOrder,
	getOrders,
	getOrderDetail,
	updateOrderStatus,
	deleteOrder,
} = require('../controllers/orderController');
const { schemas, validateParam } = require('../helpers/routerHelpers');

router.post('/', passport.authenticate('jwt', { session: false }), createOrder);
router.get('/', passport.authenticate('jwt', { session: false }), getOrders);
router.get(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	validateParam(schemas.idSchema, 'id'),
	getOrderDetail
);
router.patch(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	validateParam(schemas.idSchema, 'id'),
	updateOrderStatus
);
router.delete(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	validateParam(schemas.idSchema, 'id'),
	deleteOrder
);

module.exports = router;
