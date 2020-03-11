const axios = require('axios');
const httpStatus = require('http-status');

const { googleKey } = require('../config/config');
const googleMapsClient = require('@google/maps').createClient({
	key: googleKey,
	Promise: Promise
});

exports.list = async (req, res, next) => {
	try {
		res.json({
			message: 'Successful.',
			status: httpStatus.OK,
		});
	} catch (err) {
		next(err);
	}
};
