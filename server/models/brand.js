const mongoose = require('mongoose');

const BrandSchema = mongoose.Schema({
	title: { type: String, required: true },
	summary: { type: String, required: true },
	description: String,
});

module.exports = mongoose.model('Brand', BrandSchema);
