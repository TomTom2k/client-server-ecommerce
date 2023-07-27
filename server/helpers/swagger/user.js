/**
 * @swagger
 * /user/auth/google:
 *   post:
 *     summary: Authenticate with Google.
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: Successful operation.
 *         headers:
 *           Authorization:
 *             schema:
 *               type: string
 *             description: JWT token.
 */

/**
 * @swagger
 * /user/secret:
 *   get:
 *     summary: Retrieve a secret.
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: Successful operation.
 *         headers:
 *           Authorization:
 *             schema:
 *               type: string
 *             description: JWT token.
 */

/**
 * @swagger
 * /user/sign-in:
 *   post:
 *     summary: Sign in a user.
 *     tags: [Users]
 *     consumes:
 *       - application/json
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email of the user to authenticate.
 *               password:
 *                 type: string
 *                 description: The user's password.
 *     responses:
 *       '200':
 *         description: Successful operation.
 *         headers:
 *           Authorization:
 *             schema:
 *               type: string
 *             description: JWT token.
 */

/**
 * @swagger
 * /user/signUp:
 *   post:
 *     summary: Sign up a new user.
 *     tags: [Users]
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: The user to create.
 *         schema:
 *           type: object
 *           required:
 *             - firstName
 *             - lastName
 *             - password
 *             - email
 *             - phoneNumber
 *           properties:
 *             firstName:
 *               type: string
 *             lastName:
 *               type: string
 *             password:
 *               type: string
 *             email:
 *               type: string
 *             phoneNumber:
 *               type: string
 *     responses:
 *       '200':
 *         description: Successful operation.
 *         headers:
 *           auth:
 *             schema:
 *               type: string
 *             description: JWT token.
 */
