const JWT = require('jsonwebtoken');

const User = require('../models/user');
const configs = require('../configs');

const encodedToken = (username) => {
	return JWT.sign(
		{
			iss: 'thanhtin',
			sub: username,
			iat: new Date().getTime(),
			exp: new Date().setDate(new Date().getDate() + 30),
		},
		configs.JWT_SECRET
	);
};

const signIn = async (req, res, next) => {
	const { username, password } = req.value.body;
	res.status(200).json('sign in success');
};

const signUp = async (req, res, next) => {
	const { firstName, lastName, username, password, email, phoneNumber } =
		req.value.body;

	// check if user already exists
	const foundUserNameUser = await User.findOne({ username });
	if (foundUserNameUser) {
		return res
			.status(400)
			.json({ error: { message: 'username already exists' } });
	}
	const foundEmailNameUser = await User.findOne({ email });
	if (foundEmailNameUser) {
		return res
			.status(400)
			.json({ error: { message: 'email already exists' } });
	}

	// create user
	const newUser = new User({
		firstName,
		lastName,
		username,
		password,
		email,
		phoneNumber,
	});
	newUser.save();

	// Encode a token
	const token = encodedToken(newUser.username);

	res.setHeader('auth', token);
	return res.status(200).json({ user: 'CREATE SUCCESS !!!' });
};

module.exports = {
	signIn,
	signUp,
};
