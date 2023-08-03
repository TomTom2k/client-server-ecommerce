const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
	productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
	quantity: { type: Number, required: true },
	price: { type: Number, required: true },
});

const OrderSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	products: [OrderItemSchema],
	total: { type: Number, required: true },
	status: {
		type: String,
		enum: ['Pending', 'Transit', 'Delivered', 'Cancelled'],
		default: 'Pending',
	},
	addressId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Address',
		required: true,
	},
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now },
});

OrderSchema.pre('save', function (next) {
	this.updated_at = Date.now();
	next();
});

module.exports = mongoose.model('Order', OrderSchema);
