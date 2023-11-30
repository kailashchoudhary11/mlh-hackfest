require("dotenv").config();
// import { Client,IntentsBitField } from "discord.js";
const {Client,IntentsBitField} = require('discord.js')
const { FellowshipData } = require( "./data/fellowshipData");
const { HackathonData } = require( "./data/hackathonData");
const { GHWData } = require( "./data/ghwData");
const { Hackathon,GHW,Fellowship } = require( "./schema");
const {insertAllData} = require('./insertData')
const {getUpcomingFellowships, getUpcomingGHWs, getUpcomingHackathons} = require('./fetchData')

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
 if (message.content == "!insert") {
  const insert = await insertAllData(Hackathon,GHW,Fellowship,HackathonData,FellowshipData,GHWData);
    message.reply("Data inserted successfully: "+insert);
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
