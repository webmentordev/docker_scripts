const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const token = process.env.TOKEN;

const client = new Client({ intents: [
    GatewayIntentBits.Guilds
]});

client.once('ready', (bot) => {
    console.log(`${bot.user.tag} is ready!`);
});

client.login(token);