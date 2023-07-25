const router = require('express').Router();
const passport = require('passport');

const {
	signIn,
	signUp,
	secret,
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

module.exports = router;
