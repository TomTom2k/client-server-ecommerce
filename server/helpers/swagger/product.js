/**
 * @swagger
 * /product:
 *   get:
 *     summary: Get all products.
 *     tags: [Products]
 *     security:
 *      - BearerAuth: []
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
 * /product/list-submit:
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
 * /product/search:
 *   get:
 *     summary: Search for products based on various criteria.
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: keyword
 *         schema:
 *           type: string
 *         description: Keyword for product title.
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: number
 *         description: Minimum price of the product.
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: number
 *         description: Maximum price of the product.
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: ID of the product category.
 *       - in: query
 *         name: brand
 *         schema:
 *           type: string
 *         description: ID of the product brand.
 *     responses:
 *       '200':
 *         description: A list of products that matches the search criteria.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product fetched successfully
 *                 products:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * /product/{id}:
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
 * /product:
 *   post:
 *     summary: Create a new product.
 *     tags: [Products]
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
 *                 description: The title of the product.
 *               price:
 *                 type: number
 *                 description: The price of the product.
 *               stock:
 *                 type: number
 *                 description: The stock count of the product.
 *               brand:
 *                 type: string
 *                 format: uuid
 *                 description: The reference to the Brand object.
 *               category:
 *                 type: string
 *                 format: uuid
 *                 description: The reference to the Category object.
 *               status:
 *                 type: string
 *                 enum: ['SUBMIT', 'ACCEPT', 'CANCEL']
 *                 description: The status of the product.
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: An array of image files.
 *               description:
 *                 type: string
 *                 format: binary
 *                 description: A markdown file for product description.
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
 * /product/{id}:
 *   patch:
 *     summary: Update the status of a product by ID.
 *     tags: [Products]
 *     security:
 *      - BearerAuth: []
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
