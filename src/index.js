require("dotenv").config();
const { getUpcomingFellowships, getUpcomingGHWs, getUpcomingHackathons } = require('./db');

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

client.on('messageCreate', async(message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content == "!hackathons") {
    const hackathons = await getUpcomingHackathons();
    message.reply("Here is the list of upcoming hackathons"+hackathons);
  } else if (message.content == "!ghw") {
    const ghw = await getUpcomingGHWs();
    message.reply("Here is the list of upcoming ghw"+ghw);
  } else if (message.content == "!fellowship") {
    const fellowship = await getUpcomingFellowships();
    message.reply("Here is the list of upcoming fellowship"+fellowship);
  }
});

client.login(process.env.TOKEN);
