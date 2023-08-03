// [GET] /order
/**
 * @swagger
 * /order:
 *   get:
 *     summary: Get all orders.
 *     tags: [Orders]
 *     security:
 *      - BearerAuth: []
 *     responses:
 *       '200':
 *         description: A list of orders.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */

// [GET] /order/:id
/**
 * @swagger
 * /order/{id}:
 *   get:
 *     summary: Get a specific order by ID.
 *     tags: [Orders]
 *     security:
 *      - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Order ID.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: The order data.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 */

// [POST] /order
/**
 * @swagger
 * /order:
 *   post:
 *     summary: Create a new order.
 *     tags: [Orders]
 *     security:
 *      - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       '201':
 *         description: The created order.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *
 */

// [PATCH] /order/:id
/**
 * @swagger
 * /order/{id}:
 *   patch:
 *     summary: Update an order by ID.
 *     tags: [Orders]
 *     security:
 *      - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Order ID.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: Order status.
 *     responses:
 *       '200':
 *         description: Success message.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 */

// [DELETE] /order/:id
/**
 * @swagger
 * /order/{id}:
 *   delete:
 *     summary: Delete an order by ID.
 *     tags: [Orders]
 *     security:
 *      - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Order ID.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Success message.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 */
