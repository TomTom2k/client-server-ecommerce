const router = require('express').Router();

const { signIn, signUp } = require('../controllers/userController');
const { validateBody, schemas } = require('../helpers/routerHelpers');

router.post('/signin', validateBody(schemas.authSignInSchema), signIn);
router.post('/signup', validateBody(schemas.authSignUpSchema), signUp);

module.exports = router;
