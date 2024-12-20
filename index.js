const { config } = require('./lib/config');
const { logger } = require('./lib/logger');
const { connectToDatabase } = require('./lib/database');
const { connectToWhatsApp } = require('./lib/whatsapp');

async function startBot() {
    try {
        await connectToDatabase();
        logger.info('Connected to database');
        
        await connectToWhatsApp();
    } catch (error) {
        logger.error('Failed to start bot:', error);
        process.exit(1);
    }
}

startBot();