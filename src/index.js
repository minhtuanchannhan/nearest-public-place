const { port, env } = require('./config/config');
const logger = require('./config/logger');
const app = require('./config/app');

app.listen(port, () => logger.info(`Server started on port ${port} (${env})`));

module.exports = app;
