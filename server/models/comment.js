const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			require: true,
		},
		rate: { type: Number, min: 0, max: 5, required: true },
		content: String,
		productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Comment', CommentSchema);
