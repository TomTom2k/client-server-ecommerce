/**
 * @swagger
 * tags:
 *   name: Brands
 *   description: API endpoints related to brands.
 */

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: API to manage categories
 */

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: API to manage comments
 */

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API to manage products
 */

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: API endpoints related to orders.
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API to manage users
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Brand:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         summary:
 *           type: string
 *         description:
 *           type: string
 *     Category:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Category name.
 *           required: true
 *         description:
 *           type: string
 *           description: Category description.
 *     Comment:
 *       type: object
 *       required:
 *         - userId
 *         - rate
 *         - productId
 *       properties:
 *         userId:
 *           type: string
 *           description: ID of the user who made the comment.
 *         rate:
 *           type: number
 *           description: Rating given by the user.
 *           minimum: 0
 *           maximum: 5
 *         content:
 *           type: string
 *           description: Comment content.
 *         productId:
 *           type: string
 *           description: ID of the product being commented on.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the comment was created.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the comment was last updated.
 
 *     Product:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: Product title.
 *           required: true
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           description: Product images.
 *           required: true
 *         price:
 *           type: number
 *           description: Product price.
 *           minimum: 0
 *           required: true
 *         stock:
 *           type: number
 *           description: Product stock quantity.
 *           minimum: 0
 *           default: 0
 *         brand:
 *           type: string
 *           description: ID of the related brand.
 *           required: true
 *         category:
 *           type: string
 *           description: ID of the related category.
 *         description:
 *           type: string
 *           description: Product description.
 *         userManual:
 *           type: array
 *           items:
 *             type: string
 *           description: User manual for the product.
 *         status:
 *           type: string
 *           enum: [SUBMIT, ACCEPT, CANCEL]
 *           description: Product status.
 *           default: SUBMIT
 *     User:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           description: User's first name.
 *           required: true
 *         lastName:
 *           type: string
 *           description: User's last name.
 *           required: true
 *         password:
 *           type: string
 *           description: User's password.
 *         email:
 *           type: string
 *           description: User's email.
 *           required: true
 *           unique: true
 *         phoneNumber:
 *           type: string
 *           description: User's phone number.
 *         addresses:
 *           type: array
 *           items:
 *             type: string
 *           description: IDs of the related addresses.
 *         authGoogleID:
 *           type: string
 *           description: Google authentication ID.
 *           default: null
 *         authFacebookID:
 *           type: string
 *           description: Facebook authentication ID.
 *           default: null
 *         authType:
 *           type: string
 *           enum: [local, google, facebook]
 *           description: Authentication type.
 *           default: local
 *     Order:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *           description: The ID of the user who created the order.
 *         products:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/OrderItem'
 *           description: An array of products in the order.
 *         total:
 *           type: number
 *           description: The total cost of the order.
 *           minimum: 0
 *         status:
 *           type: string
 *           description: The status of the order.
 *           enum: ['Pending', 'Transit', 'Delivered', 'Cancelled']
 *           default: 'Pending'
 *         addressId:
 *           type: string
 *           description: The ID of the address to deliver the order to.
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The date/time the order was created.
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: The date/time the order was last updated.
 */
