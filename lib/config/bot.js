const { constants } = require('./constants');

function getBotConfig(env) {
    return {
        ownerNumber: env.OWNER_NUMBER || '',
        prefix: env.PREFIX || constants.bot.DEFAULT_PREFIX,
        authFolder: constants.bot.AUTH_FOLDER
    };
}

module.exports = { getBotConfig };