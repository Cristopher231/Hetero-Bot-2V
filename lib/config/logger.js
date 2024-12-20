const { constants } = require('./constants');

function getLoggerConfig(env) {
    return {
        level: env.LOG_LEVEL || constants.logger.DEFAULT_LEVEL
    };
}

module.exports = { getLoggerConfig };