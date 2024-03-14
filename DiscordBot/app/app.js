const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const token = process.env.TOKEN;

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages
]});

client.once('ready', (bot) => {
    console.log(`${bot.user.tag} is ready!`);
});

client.once('messageCreate', async (message) => {
    if(message.author.bot == true) return;
    if (message.content == "hi") {
        await message.reply(`Hi, How are you mate?`);
    }
});

client.login(token);