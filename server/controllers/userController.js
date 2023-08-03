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
const addUserAddress = async (req, res, next) => {
	try {
		const { street, district, city } = req.body;
		const userId = req.user._id; //
		console.log(req.body);
		// Create a new address
		const newAddress = {
			street,
			district,
			city,
		};

		// Find the user and update
		const user = await User.findById(userId);
		user.addresses.push(newAddress);
		await user.save();

		res.json({
			message: 'Address added successfully!',
			addresses: user.addresses,
		});
	} catch (error) {
		next(error);
	}
};

const authGoogle = async (req, res, next) => {
	try {
		const token = encodedToken(req.user._id);

		res.setHeader('Authorization', token);
		return res.status(200).json({ message: 'Login successfully!' });
	} catch (error) {
		next(error);
	}
};

const deleteUserAddress = async (req, res) => {
	try {
		const { addressId } = req.params;
		const userId = req.user._id;

		// Pull the address from the user's addresses array
		const user = await User.findByIdAndUpdate(
			userId,
			{ $pull: { addresses: { _id: addressId } } },
			{ new: true } // This option returns the updated document
		);

		// Check if the address was found and removed
		if (!user) {
			return res.status(400).json({ message: 'Address not found.' });
		}

		// Send response
		res.json({
			message: 'Address deleted successfully!',
		});
	} catch (error) {
		next(error);
	}
};

const getAddresses = async (req, res) => {
	try {
		const userId = req.user._id;
		const user = await User.findById(userId);

		// Send response
		res.json({
			message: 'Address fetched successfully!',
			addresses: user.addresses, // This will now include the list of addresses.
		});
	} catch (error) {
		next(error);
	}
};

const secret = async (req, res, next) => {
	try {
		const { email, firstName, lastName, phoneNumber, addresses, role } =
			req.user;
		const user = {
			email,
			firstName,
			lastName,
			phoneNumber,
			addresses,
			role,
		};

		return res.status(200).json({
			message: 'User fetched successfully!',
			user: user,
		});
	} catch (error) {
		next(error);
	}
};

const signIn = async (req, res, next) => {
	try {
		const token = encodedToken(req.user.email);
		res.setHeader('Authorization', token);
		res.status(200).json({
			message: 'User login successfully!',
		});
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
		return res.status(200).json({
			message: 'User register successfully!',
		});
	} catch (error) {
		next(error);
	}
};

module.exports = {
	addUserAddress,
	authGoogle,
	deleteUserAddress,
	getAddresses,
	secret,
	signIn,
	signUp,
};
