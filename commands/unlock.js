module.exports = {
    name:'unlock',
    description: "lock canal wl!",
    async execute(client, message, args, Discord) {
     if(message.member.roles.cache.some(r => r.name === "👮🏻 | Douanier")) {
        const waitning_channel = message.guild.channels.cache.find(c => c.name === "🛂-Attente WL-🛂");
            const fivem = message.guild.roles.cache.get("619439590465339398");
	    const newbie = message.guild.roles.cache.get("619439735420616704");
	    await waitning_channel.setUserLimit (0);
	    await waitning_channel.updateOverwrite (newbie,  {"CONNECT":true});
            await waitning_channel.updateOverwrite (fivem,  {"CONNECT":true});
    
    } else {
        message.channel.send('Vous n\'avez pas le droit d\'utiliser cette commande');
    }
}}