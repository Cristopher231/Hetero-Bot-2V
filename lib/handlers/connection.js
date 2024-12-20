const { DisconnectReason } = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const { logger } = require('../logger');

function setupConnectionHandler(sock, connectToWhatsApp) {
    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;
        
        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect?.error instanceof Boom)?.output?.statusCode !== DisconnectReason.loggedOut;
            logger.info('Connection closed due to ', lastDisconnect?.error);
            
            if (shouldReconnect) {
                connectToWhatsApp();
            }
        } else if (connection === 'open') {
            logger.info('Connected to WhatsApp');
        }
    });
}

module.exports = { setupConnectionHandler };