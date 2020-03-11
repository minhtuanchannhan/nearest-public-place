require('dotenv').config();

module.exports = {
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 3000,
	logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
	googleKey: process.env.GOOGLE_MAPS_API_KEY || '',
};
