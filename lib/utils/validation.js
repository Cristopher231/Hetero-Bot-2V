/**
 * Validates WhatsApp message content
 */
function validateMessage(message) {
    if (!message || typeof message !== 'object') {
        return false;
    }
    return true;
}

/**
 * Validates command format
 */
function validateCommand(command, prefix) {
    if (!command || typeof command !== 'string') {
        return false;
    }
    return command.startsWith(prefix);
}

module.exports = {
    validateMessage,
    validateCommand
};