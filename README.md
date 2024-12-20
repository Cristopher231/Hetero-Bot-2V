# Hetero-Bot-MD

A powerful WhatsApp Multi-Device Bot created by Cristopher231.

## Features

- Group management commands
- Level and experience system
- Integrated games
- Multimedia content downloads
- Anti-spam and anti-link system
- Custom interactive menu
- Automatic stickers
- NSFW commands (toggleable)
- Plugin system
- Multi-device support

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud)
- [Termux](https://termux.com/) (for Android users)

### Termux Installation

```bash
# Update packages
pkg update && pkg upgrade

# Install required packages
pkg install nodejs git ffmpeg imagemagick

# Clone repository
git clone https://github.com/Cristopher231/hetero-bot-md
cd hetero-bot-md

# Install dependencies
npm install

# Start the bot
npm start
```

### Configuration

1. Create a `.env` file in the root directory
2. Add the following variables:
```env
MONGODB_URI=your_mongodb_uri
OWNER_NUMBER=your_number
PREFIX=!
```

## Usage

1. Scan the QR code that appears in the terminal
2. Wait for the bot to connect
3. Send !help in any chat to see available commands

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

- [@whiskeysockets/baileys](https://github.com/WhiskeySockets/Baileys) - WhatsApp Web API
- All contributors and plugin developers

## Support

For support, join our [WhatsApp Group](https://chat.whatsapp.com/your_group_link)