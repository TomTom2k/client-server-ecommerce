const router = require('express').Router();
const passport = require('passport');

const {
	signIn,
	signUp,
	secret,
	getAddresses,
	deleteUserAddress,
	addUserAddress,
	authGoogle,
} = require('../controllers/userController');
const { validateBody, schemas } = require('../helpers/routerHelpers');

// add config for password
require('../middleware/passport');

router.post(
	'/auth/google',
	passport.authenticate('google-plus-token', { session: false }),
	authGoogle
);
router.post(
	'/sign-in',
	validateBody(schemas.authSignInSchema),
	passport.authenticate('local', { session: false }),
	signIn
);
router.post('/sign-up', validateBody(schemas.authSignUpSchema), signUp);
router.get('/secret', passport.authenticate('jwt', { session: false }), secret);

router.post(
	'/address',
	passport.authenticate('jwt', { session: false }),
	addUserAddress
);
router.delete(
	'/address/:addressId',
	passport.authenticate('jwt', { session: false }),
	deleteUserAddress
);
router.get(
	'/addresses',
	passport.authenticate('jwt', { session: false }),
	getAddresses
);

module.exports = router;
