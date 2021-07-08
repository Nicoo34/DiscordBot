module.exports = {
    name:'lock',
    description: "lock canal wl!",
    async execute(client, message, args, Discord) {
     if(message.member.roles.cache.some(r => r.name === "YOUR_ROLE")) {
        const waitning_channel = message.guild.channels.cache.find(c => c.name === "VOICE CHANNEL");
        const fivem = message.guild.roles.cache.get("ROLES");
	const newbie = message.guild.roles.cache.get("ROLES");
	await waitning_channel.setUserLimit (0);
	await waitning_channel.updateOverwrite (newbie,  {"CONNECT":false});
        await waitning_channel.updateOverwrite (fivem,  {"CONNECT":false});
    
    } else {
        message.channel.send('Vous n\'avez pas le droit d\'utiliser cette commande');
    }
}}