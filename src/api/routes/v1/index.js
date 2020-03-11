const express = require('express');
const placesRoutes = require('./place.route');

const router = express.Router();

router.use('/places', placesRoutes);

module.exports = router;
