module.exports = {
    name: 'help',
    description: 'Display bot commands and information',
    async execute(sock, msg, args) {
        const helpText = `
🤖 *HETERO-BOT-MD* 🤖
Created by Cristopher231

📜 *COMMANDS*:
!help - Show this menu
!ping - Check bot status
!sticker - Create sticker from image
!play - Play YouTube audio
!level - Check your level
!nsfw - Toggle NSFW commands

👥 *GROUP COMMANDS*:
!add - Add member
!kick - Remove member
!promote - Make admin
!demote - Remove admin
!link - Get group link

🎮 *GAMES*:
!tictactoe - Play TicTacToe
!truth - Truth question
!dare - Dare challenge

⬇️ *DOWNLOADS*:
!yt - Download YouTube video
!ig - Download Instagram media
!tiktok - Download TikTok video

For more information, contact the creator.
        `;

        await sock.sendMessage(msg.key.remoteJid, { text: helpText });
    }
};