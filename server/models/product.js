const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema(
	{
		title: { type: String, require: true },
		images: { type: [String], require: true },
		price: { type: Number, min: 0, require: true },
		stock: { type: Number, min: 0, default: 0 },
		brand: { type: Schema.Types.ObjectId, ref: 'Brand', require: true },
		category: { type: Schema.Types.ObjectId, ref: 'Category' },
		description: String,
		userManual: [String],

		status: {
			type: String,
			enum: ['SUBMIT', 'ACCEPT', 'CANCEL'],
			default: 'SUBMIT',
		},
	},
	{
		timestamps: true,
	}
);
module.exports = mongoose.model('Product', ProductSchema);
