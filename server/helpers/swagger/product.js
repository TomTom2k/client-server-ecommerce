/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products.
 *     tags: [Products]
 *     responses:
 *       '200':
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * /products/list-submit:
 *   get:
 *     summary: Get all products that are accepted.
 *     tags: [Products]
 *     responses:
 *       '200':
 *         description: A list of accepted products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get details of a specific product.
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Product ID.
 *         required: true
 *         type: string
 *     responses:
 *       '200':
 *         description: Details of the specified product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product.
 *     tags: [Products]
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: product
 *         description: Product object to be added.
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Product'
 *     responses:
 *       '201':
 *         description: The created product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * /products/{id}:
 *   patch:
 *     summary: Update the status of a product by ID.
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Product ID.
 *         required: true
 *         type: string
 *       - in: body
 *         name: status
 *         description: Updated status.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *     responses:
 *       '201':
 *         description: Success message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 product:
 *                   type: string
 */
