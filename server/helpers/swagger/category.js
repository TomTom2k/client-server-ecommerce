// [GET] /Category
/**
 * @swagger
 * /Category:
 *   get:
 *     summary: Get all categories.
 *     tags: [Categories]
 *     responses:
 *       '200':
 *         description: A list of categories.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */

// [POST] /Category
/**
 * @swagger
 * /Category:
 *   post:
 *     summary: Create a new category.
 *     tags: [Categories]
 *     security:
 *      - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       '201':
 *         description: The created category.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */

// [DELETE] /Category/:id
/**
 * @swagger
 * /category/{id}:
 *   delete:
 *     summary: Delete a category by ID.
 *     tags: [Categories]
 *     security:
 *      - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Category ID.
 *         required: true
 *         type: string
 *     responses:
 *       '201':
 *         description: Success message.
 *         content:
 *           application/json:
 *              schema:
 *               $ref: '#/components/schemas/Category'
 */
