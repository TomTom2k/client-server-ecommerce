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
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: title
 *         description: Brand title.
 *         required: true
 *         type: string
 *       - in: formData
 *         name: summary
 *         description: Brand summary.
 *         required: true
 *         type: string
 *       - in: formData
 *         name: description
 *         description: Brand description (file upload).
 *         required: false
 *         type: file
 *     responses:
 *       '201':
 *         description: The created brand.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Brand'
 */

// [PATCH] /brand/:id
/**
 * @swagger
 * /brand/{id}:
 *   patch:
 *     summary: Update a brand by ID.
 *     tags: [Brands]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Brand ID.
 *         required: true
 *         type: string
 *       - in: body
 *         name: brand
 *         description: Updated brand object.
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Brand'
 *     responses:
 *       '201':
 *         description: Success message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 brand:
 *                   type: string
 */

// [DELETE] /brand/:id
/**
 * @swagger
 * /brand/{id}:
 *   delete:
 *     summary: Delete a brand by ID.
 *     tags: [Brands]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Brand ID.
 *         required: true
 *         type: string
 *     responses:
 *       '201':
 *         description: Success message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 brand:
 *                   type: string
 */
