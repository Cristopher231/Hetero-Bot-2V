const { constants } = require('./constants');

function getDatabaseConfig(env) {
    return {
        uri: env.MONGODB_URI || constants.database.DEFAULT_URI,
        options: constants.database.CONNECTION_OPTIONS
    };
}

module.exports = { getDatabaseConfig };