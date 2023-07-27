// [GET] /brand
/**
 * @swagger
 * /brand:
 *   get:
 *     summary: Get all brands.
 *     tags: [Brands]
 *     responses:
 *       '200':
 *         description: A list of brands.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Brand'
 */

// [POST] /brand
/**
 * @swagger
 * /brand:
 *   post:
 *     summary: Create a new brand.
 *     tags: [Brands]
 *     security:
 *      - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Brand title.
 *               summary:
 *                 type: string
 *                 description: Brand summary.
 *               description:
 *                 type: string
 *                 format: binary
 *                 description: Brand description (file upload).
 *     responses:
 *       '201':
 *         description: The created brand.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Brand'
 *
 */

// [PATCH] /brand/:id
/**
 * @swagger
 * /brand/{id}:
 *   patch:
 *     summary: Update a brand by ID.
 *     tags: [Brands]
 *     security:
 *      - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Brand ID.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Brand title.
 *                 required: false
 *               summary:
 *                 type: string
 *                 description: Brand summary.
 *                 required: false
 *               description:
 *                 type: string
 *                 format: binary
 *                 description: Brand description (file upload).
 *     responses:
 *       '201':
 *         description: Success message.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Brand'
 */

// [DELETE] /brand/:id
/**
 * @swagger
 * /brand/{id}:
 *   delete:
 *     summary: Delete a brand by ID.
 *     tags: [Brands]
 *     security:
 *      - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Brand ID.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Success message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 brand:
 *                   type: string
 */
