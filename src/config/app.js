const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('../api/routes/v1');
const { logs } = require('./config');
const error = require('../middlewares/error');

const app = express();

app.use(morgan(logs));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compress());
app.use(helmet());
app.use(cors());

app.use('/api/v1', routes);

app.use(error.converter);
app.use(error.notFound);
app.use(error.handler);

module.exports = app;
