const Joi = require('joi');

const validateBody = (schema) => {
	return (req, res, next) => {
		const validateResult = schema.validate(req.body);

		if (validateResult.error) {
			return res.status(400).json(validateResult.error);
		} else {
			if (!req.value) req.value = {};
			req.value.body = validateResult.value;
			next();
		}
	};
};

const validateParam = (schema, name) => {
	return (req, res, next) => {
		const validatorResult = schema.validate({
			param: req.params[name],
		});
		if (validatorResult.error) {
			return res.status(400).json(validatorResult.error);
		} else {
			if (!req.value) req.value = {};
			if (!req.value['params']) req.value.params = {};

			req.value.params[name] = req.params[name];
			next();
		}
	};
};

const schemas = {
	authSignInSchema: Joi.object().keys({
		email: Joi.string().min(6).required(),
		password: Joi.string().min(6).required(),
	}),

	authSignUpSchema: Joi.object().keys({
		firstName: Joi.string().min(2).required(),
		lastName: Joi.string().min(2).required(),
		password: Joi.string().min(6).required(),
		email: Joi.string().min(6).required(),
		phoneNumber: Joi.string().min(6).required(),
	}),

	idSchema: Joi.object().keys({
		param: Joi.string()
			.regex(/^[0-9a-fA-F]{24}$/)
			.required(),
	}),
};

module.exports = {
	validateBody,
	validateParam,
	schemas,
};
