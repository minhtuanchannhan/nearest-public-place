const axios = require('axios');
const httpStatus = require('http-status');

const { googleKey } = require('../config/config');
const googleMapsClient = require('@google/maps').createClient({
	key: googleKey,
	Promise: Promise
});

exports.list = async (req, res, next) => {
	let lat = req.body.lat || '';
	let lng = req.body.lng || '';

	try {
		if (lat && lng) {
			let places = googleMapsClient.placesNearby({
				location: { lat, lng },
				radius: req.body.radius || 50000,
			}).asPromise().then(response => {
				res.json({
					code: 200,
					message: 'Successful.',
					data: response.json.results
				});
			}).catch((err) => {
				err.message = 'Places was not found.'
				next(err);
			});
		} else {
			res.status(httpStatus.UNPROCESSABLE_ENTITY);
			res.json({
				message: 'Validate Error.',
				errors: 'lat and lng are required fields.'
			});
		}
	} catch (err) {
		next(err);
	}
};
