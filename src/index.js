require("dotenv").config();
const GHW = require('./db')
const Fellowship = require('./db')
const Hackathon = require('./db')

const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
  console.log(`${c.user.tag} is now working fine`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content == "!hackathons") {
    message.reply("Here is the list of upcoming hackathons");
  } else if (message.content == "!ghw") {
    message.reply("Here is the list of upcoming ghw");
  } else if (message.content == "!fellowship") {
    message.reply("Here is the list of upcoming fellowship");
  }
});

client.login(process.env.TOKEN);
