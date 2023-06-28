const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const address = mongoose.Schema({
	street: { type: String, required: true },
	district: { type: String, required: true },
	city: { type: String, required: true },
});

const UserSchema = mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	password: String,
	email: { type: String, required: true, unique: true },
	phoneNumber: String,
	addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }],
	authGoogleID: {
		type: String,
		default: null,
	},
	authFacebookID: {
		type: String,
		default: null,
	},
	authType: {
		type: String,
		enum: ['local', 'google', 'facebook'],
		default: 'local',
	},
});

// hash password before save to database
UserSchema.pre('save', async function (next) {
	try {
		if (this.authType !== 'local') next();

		// generate a salt
		const salt = await bcrypt.genSalt(10);
		// generate a password hash (salt + hash)
		const passwordHashed = await bcrypt.hash(this.password, salt);
		// re-assign password hashed
		this.password = passwordHashed;
		next();
	} catch (error) {
		next(error);
	}
});

// compare password
UserSchema.methods.isValidPassword = async function (newPassword) {
	try {
		return await bcrypt.compare(newPassword, this.password);
	} catch (error) {
		throw new Error(error);
	}
};

module.exports = mongoose.model('User', UserSchema);
