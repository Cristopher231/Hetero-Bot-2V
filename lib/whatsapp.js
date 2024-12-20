const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const { logger } = require('./logger');
const { config } = require('./config');
const { loadCommands } = require('./commands');
const { loadPlugins } = require('./plugins');
const { setupConnectionHandler } = require('./handlers/connection');
const { setupMessageHandler } = require('./handlers/message');

async function connectToWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState(config.bot.authFolder);
    
    const sock = makeWASocket({
        printQRInTerminal: true,
        auth: state,
        logger: logger
    });

    // Save credentials whenever they are updated
    sock.ev.on('creds.update', saveCreds);

    // Load commands and plugins
    const commands = loadCommands();
    const plugins = loadPlugins();

    // Setup event handlers
    setupConnectionHandler(sock, connectToWhatsApp);
    setupMessageHandler(sock, commands);

    return sock;
}

module.exports = { connectToWhatsApp };