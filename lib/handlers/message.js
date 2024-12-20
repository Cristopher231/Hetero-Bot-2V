const { config } = require('../config');
const { logger } = require('../logger');
const { validateMessage, validateCommand } = require('../utils/validation');

function setupMessageHandler(sock, commands) {
    sock.ev.on('messages.upsert', async ({ messages }) => {
        const m = messages[0];
        
        if (!validateMessage(m?.message)) return;
        
        const messageType = Object.keys(m.message)[0];
        const messageContent = m.message[messageType];
        
        if (validateCommand(messageContent, config.bot.prefix)) {
            await handleCommand(sock, m, messageContent, commands);
        }
    });
}

async function handleCommand(sock, msg, content, commands) {
    const [cmd, ...args] = content.slice(1).split(' ');
    
    if (commands[cmd]) {
        try {
            await commands[cmd].execute(sock, msg, args);
        } catch (error) {
            logger.error(`Error executing command ${cmd}:`, error);
            // Send error message to user
            await sock.sendMessage(msg.key.remoteJid, { 
                text: 'An error occurred while executing the command.' 
            });
        }
    }
}

module.exports = { setupMessageHandler };