const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommentSchema = Schema({
	rate: { type: Number, min: 0, max: 5, required: true },
	content: String,
	product: { Type: Schema.Types.ObjectId, ref: 'Product' },
});
module.exports = mongoose.model('Comment', CommentSchema);
