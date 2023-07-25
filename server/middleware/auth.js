const authRoute = (permission) => {
	return (req, res, next) => {
		const userRole = req.user.role;
		if (permission.includes(userRole)) {
			next();
		} else {
			return res.status(401).json('NOT PERMISSION');
		}
	};
};

module.exports = { authRoute };
