/**
 * @swagger
 * /product/{productId}/comment:
 *   post:
 *     summary: Create a new comment for a product.
 *     tags: [Comments]
 *     security:
 *      - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID to create a comment for.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rate:
 *                 type: number
 *                 description: Rating for the product.
 *               content:
 *                 type: string
 *                 description: Comment content.
 *     responses:
 *       '201':
 *         description: Comment created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 */

/**
 * @swagger
 * /product/{productId}/comment/{id}:
 *   delete:
 *     summary: Delete a comment by ID.
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The comment ID to delete.
 *     responses:
 *       '200':
 *         description: Comment deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message.
 */

/**
 * @swagger
 * /products/{productId}/comments:
 *   get:
 *     summary: Get all comments for a product.
 *     tags: [Comments]
 *     security:
 *      - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID to get comments for.
 *     responses:
 *       '200':
 *         description: A list of comments for the product.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comment'
 */
