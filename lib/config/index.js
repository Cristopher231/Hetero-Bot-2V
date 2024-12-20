const { loadEnvConfig } = require('./env');

const config = loadEnvConfig();

module.exports = { config };