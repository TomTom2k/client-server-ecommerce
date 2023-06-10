const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
	name: { type: String, require: true },
	description: String,
});

module.exports = mongoose.model('Category', CategorySchema);
