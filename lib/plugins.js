const fs = require('fs');
const path = require('path');

function loadPlugins() {
    const plugins = {};
    const pluginsPath = path.join(__dirname, '../plugins');
    
    if (!fs.existsSync(pluginsPath)) {
        return plugins;
    }
    
    const pluginFiles = fs.readdirSync(pluginsPath).filter(file => file.endsWith('.js'));
    
    for (const file of pluginFiles) {
        const plugin = require(path.join(pluginsPath, file));
        plugins[plugin.name] = plugin;
    }
    
    return plugins;
}

module.exports = { loadPlugins };