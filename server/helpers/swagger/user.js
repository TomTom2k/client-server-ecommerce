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
 *     security:
 *      - BearerAuth: []
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
 * /user/sign-up:
 *   post:
 *     summary: Sign up a new user.
 *     tags: [Users]
 *     consumes:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - password
 *               - email
 *               - phoneNumber
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Successful operation.
 *         headers:
 *           auth:
 *             schema:
 *               type: string
 *             description: JWT token.
 */

// address of user
/**
 * @swagger
 * /user/address:
 *   post:
 *     security:
 *      - BearerAuth: []
 *     summary: Add an address for a user
 *     tags: [Users]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               street:
 *                 type: string
 *               district:
 *                 type: string
 *               city:
 *                 type: string
 *     responses:
 *       200:
 *         description: The address was successfully added
 *       500:
 *         description: An error occurred while adding the address
 */

/**
 * @swagger
 * /user/address/{addressId}:
 *   delete:
 *     security:
 *      - BearerAuth: []
 *     summary: Delete a user's address
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: addressId
 *         required: true
 *         schema:
 *           type: string
 *         description: The address id
 *     responses:
 *       200:
 *         description: The address was successfully deleted
 *       400:
 *         description: Address not found
 *       500:
 *         description: An error occurred while deleting the address
 */

/**
 * @swagger
 * /user/addresses:
 *   get:
 *     security:
 *      - BearerAuth: []
 *     summary: Get a list of addresses for a user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The addresses were successfully fetched
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 addresses:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       street:
 *                         type: string
 *                       district:
 *                         type: string
 *                       city:
 *                         type: string
 *       500:
 *         description: An error occurred while fetching the addresses
 */
