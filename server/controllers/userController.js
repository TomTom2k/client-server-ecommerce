const JWT = require('jsonwebtoken');

const User = require('../models/user');
const configs = require('../configs');

const encodedToken = (email) => {
	return JWT.sign(
		{
			iss: 'thanhtin',
			sub: email,
			iat: new Date().getTime(),
			exp: new Date().setDate(new Date().getDate() + 30),
		},
		configs.JWT_SECRET
	);
};

// control
const authGoogle = async (req, res, next) => {
	try {
		const token = encodedToken(req.user._id);

		res.setHeader('Authorization', token);
		return res.status(200).json({ success: true });
	} catch (error) {
		next(error);
	}
};

const secret = async (req, res, next) => {
	try {
		const token = encodedToken(req.user._id);

		res.setHeader('Authorization', token);
		return res.status(200).json({ success: true });
	} catch (error) {
		next(error);
	}
};

const signIn = async (req, res, next) => {
	try {
		const token = encodedToken(req.user._id);

		res.setHeader('Authorization', token);
		res.status(200).json({ success: true });
	} catch (error) {
		next(error);
	}
};

const signUp = async (req, res, next) => {
	try {
		const { firstName, lastName, password, email, phoneNumber } =
			req.value.body;

		// check if user already exists
		const foundEmailUser = await User.findOne({ email });
		if (foundEmailUser) {
			return res
				.status(400)
				.json({ error: { message: 'Email already exists' } });
		}

		// create user
		const newUser = new User({
			firstName,
			lastName,
			password,
			email,
			phoneNumber,
		});
		await newUser.save();

		// Encode a token
		const token = encodedToken(newUser.email);

		res.setHeader('auth', token);
		return res.status(200).json({ success: true });
	} catch (error) {
		next(error);
	}
};

module.exports = {
	authGoogle,
	secret,
	signIn,
	signUp,
};
