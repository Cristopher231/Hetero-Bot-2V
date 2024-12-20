/**
 * Application-wide constants
 */
const constants = {
    database: {
        DEFAULT_URI: 'mongodb://localhost/hetero-bot',
        CONNECTION_OPTIONS: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    bot: {
        DEFAULT_PREFIX: '!',
        AUTH_FOLDER: 'auth_info'
    },
    logger: {
        DEFAULT_LEVEL: 'info'
    }
};

module.exports = { constants };