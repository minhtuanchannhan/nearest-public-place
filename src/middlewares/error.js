const httpStatus = require('http-status');
const expressValidation = require('express-validation');
const APIError = require('../utils/APIError');
const { env } = require('../config/config');

const handler = (err, req, res, next) => {
	const response = {
		code: err.status,
		message: err.message || httpStatus[err.status],
		errors: err.errors,
		stack: err.stack,
	};

	if (env !== 'development') {
		delete response.stack;
	}

	res.status(err.status);
	res.json(response);
};

exports.handler = handler;

exports.converter = (err, req, res, next) => {
	let convertedError = err;

	if (err instanceof expressValidation.ValidationError) {
		convertedError = new APIError({
			message: 'Validation Error.',
			errors: err.errors,
			status: err.status,
			stack: err.stack,
		});
	} else if (!(err instanceof APIError)) {
		convertedError = new APIError({
			message: err.message,
			status: err.status,
			stack: err.stack,
		});
	}

	return handler(convertedError, req, res);
};

exports.notFound = (req, res, next) => {
	const err = new APIError({
		message: 'Not Found.',
		status: httpStatus.NOT_FOUND,
	});

	return handler(err, req, res);
};
