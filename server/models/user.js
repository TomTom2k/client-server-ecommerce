const mongoose = require('mongoose');

const address = mongoose.Schema({
	street: { type: String, required: true },
	district: { type: String, required: true },
	city: { type: String, required: true },
});

const UserSchema = mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	phoneNumber: { type: String, required: true },
	addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }],
});

module.exports = mongoose.model('User', UserSchema);
