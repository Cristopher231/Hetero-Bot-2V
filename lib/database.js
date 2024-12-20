const mongoose = require('mongoose');
const { config } = require('./config');
const { logger } = require('./logger');

async function connectToDatabase() {
    try {
        await mongoose.connect(config.mongodb.uri, config.mongodb.options);
        logger.info('Successfully connected to MongoDB');
    } catch (error) {
        logger.error('Database connection error:', error);
        throw error;
    }
}

module.exports = { connectToDatabase };