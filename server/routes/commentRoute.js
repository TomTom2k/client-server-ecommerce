const express = require('express');
const passport = require('passport');

const { authRoute } = require('../middleware/auth');
const { schemas, validateParam } = require('../helpers/routerHelpers');

const {
	createComment,
	getAllCommentOfProduct,
	deleteComment,
} = require('../controllers/commentController');

const router = express.Router();

router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	createComment
);
router.get('/', getAllCommentOfProduct);
router.delete(
	'/:id',
	authRoute(['staff', 'admin']),
	validateParam(schemas.idSchema, 'id'),
	deleteComment
);

module.exports = router;
