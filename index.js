
const Discord = require('discord.js');
require('dotenv').config();
//config = require('./config.json')
client = new Discord.Client({
    fetchAllMembers: true
});


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'events_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord)
})

client.login(process.env.DISCORD_TOKEN)