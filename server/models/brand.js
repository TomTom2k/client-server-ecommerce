const mongoose = require('mongoose');
const BrandSchema = mongoose.Schema({
	title: { type: String, require: true },
	description: String,
});
module.exports = mongoose.model('Brand', BrandSchema);
