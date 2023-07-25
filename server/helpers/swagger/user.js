/**
 * @swagger
 * /auth/google:
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
 * /secret:
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
 * /signIn:
 *   post:
 *     summary: Sign in a user.
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
 * /signUp:
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
