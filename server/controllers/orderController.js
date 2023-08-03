const mongoose = require('mongoose');

const Order = require('../models/Order');
const User = require('../models/user');
const Product = require('../models/product');

// [CREATE] /order
const createOrder = async (req, res, next) => {
	try {
		const { products, addressId } = req.body;
		const userId = req.user._id;

		// Validate address
		const userPromise = User.findById(userId);

		// Validate product stock and create a promise for each product
		const productPromises = products.map((product) =>
			Product.findById(product.productId)
		);

		const [user, ...productInDBs] = await Promise.all([
			userPromise,
			...productPromises,
		]);

		const addressIds = user.addresses.map((address) =>
			address._id.toString()
		);
		if (!addressIds.includes(addressId)) {
			return res.status(400).json({
				message: 'Invalid address ID',
			});
		}

		for (let i = 0; i < products.length; i++) {
			if (products[i].quantity > productInDBs[i].stock) {
				return res.status(400).json({
					message: 'Not enough product in stock',
				});
			}
			// Update the product stock in the database
			productInDBs[i].stock -= products[i].quantity;
			await productInDBs[i].save();
		}

		// Calculate total from the products array
		const total = products.reduce((acc, product) => {
			return acc + product.price * product.quantity;
		}, 0);

		const newOrder = new Order({ userId, products, total, addressId });
		await newOrder.save();

		res.status(201).json({
			message: 'Order created successfully',
			order: newOrder,
		});
	} catch (error) {
		next(error);
	}
};

// [DELETE] /order/:id
const deleteOrder = async (req, res, next) => {
	try {
		const { id } = req.value.params;
		const userId = req.user._id;

		// Fetch the order first to know its status
		const order = await Order.findOne({ _id: id });

		if (!order) {
			return res.status(404).json({ message: 'Order not found' });
		}

		switch (order.status) {
			case 'Pending':
				// If the order is pending, we restore the stock of the products
				// Assuming the order has an array of products and each product has an id and quantity
				for (let product of order.products) {
					await Product.updateOne(
						{ _id: product.id },
						{ $inc: { stock: product.quantity } }
					);
				}
				break;

			case 'Transit':
				// If the order is in transit, we do not allow deletion
				return res
					.status(403)
					.json({ message: 'Cannot delete an order in transit' });

			case 'Transit, Cancelled':
				// If the order is in transit, cancelled, allow normal deletion
				break;

			default:
				// Other status codes, if exist
				return res
					.status(400)
					.json({ message: 'Invalid status for deletion' });
		}

		// If the execution reached here, it means the order is either pending or transit, cancelled.
		// So, delete it.
		await Order.findOneAndRemove({ _id: id, userId });

		res.status(200).json({ message: 'Order deleted successfully' });
	} catch (error) {
		next(error);
	}
};

// [GET] /order
const getOrders = async (req, res, next) => {
	try {
		const userId = req.user._id;

		const orders = await Order.find({ userId });

		res.status(200).json({
			message: 'Orders of  fetched successfully',
			orders,
		});
	} catch (error) {
		next(error);
	}
};

// [GET] /order/:id
const getOrderDetail = async (req, res, next) => {
	try {
		const { id } = req.value.params;
		const userId = req.user._id;

		const order = await Order.findOne({ _id: id, userId });

		res.status(200).json({ message: 'Order fetched successfully', order });
	} catch (error) {
		next(error);
	}
};

// Update an order
const updateOrderStatus = async (req, res, next) => {
	try {
		const { id } = req.value.params;
		const { status } = req.body;

		// Validate status here if necessary
		const oldOrder = await Order.findById(id);

		const updatedOrder = await Order.findOneAndUpdate(
			{ _id: id },
			{ status }, // only update status field
			{ new: true }
		);

		// If the order is now cancelled and wasn't cancelled before, restore the stock
		if (status === 'Cancelled' && oldOrder.status !== 'Cancelled') {
			// Assuming the order has an array of products and each product has an id and quantity
			for (let product of updatedOrder.products) {
				await Product.updateOne(
					{ _id: product.id },
					{ $inc: { stock: product.quantity } }
				);
			}
		}

		res.status(200).json({
			message: 'Order status updated successfully',
			order: updatedOrder,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = {
	createOrder,
	deleteOrder,
	getOrderDetail,
	getOrders,
	updateOrderStatus,
};
