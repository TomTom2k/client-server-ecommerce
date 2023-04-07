const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DescriptionSchema = Schema({
	title: String,
	content: [String],
});

const ProductSchema = Schema(
	{
		title: { type: String, require: true },
		images: [String],
		price: { type: Number, min: 0 },
		stock: { type: Number, min: 0, default: 0 },
		brand: Schema.Types.ObjectId,
		description: [DescriptionSchema],
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
