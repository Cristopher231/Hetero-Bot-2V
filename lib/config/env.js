const dotenv = require('dotenv');
const { getDatabaseConfig } = require('./database');
const { getBotConfig } = require('./bot');
const { getLoggerConfig } = require('./logger');

function loadEnvConfig() {
    dotenv.config();
    
    return {
        mongodb: getDatabaseConfig(process.env),
        bot: getBotConfig(process.env),
        logger: getLoggerConfig(process.env)
    };
}

module.exports = { loadEnvConfig };