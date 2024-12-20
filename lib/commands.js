const fs = require('fs');
const path = require('path');

function loadCommands() {
    const commands = {};
    const commandsPath = path.join(__dirname, '../commands');
    
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    
    for (const file of commandFiles) {
        const command = require(path.join(commandsPath, file));
        commands[command.name] = command;
    }
    
    return commands;
}

module.exports = { loadCommands };