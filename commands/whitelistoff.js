module.exports = {
    name:'wloff',
    description: "Met fin à une session whitelist!",
    async execute(client, message, args, Discord){
        if(message.member.roles.cache.some(r => r.name === "👮🏻 | Douanier")){
            const waitning_channel = message.guild.channels.cache.find(c => c.name === "🛂-Attente WL-🛂");
            const fivem = message.guild.roles.cache.get("619439590465339398");
	    const newbie = message.guild.roles.cache.get("619439735420616704");
	    await waitning_channel.setUserLimit (0);
	    await waitning_channel.updateOverwrite (newbie,  {"CONNECT":false});
            await waitning_channel.updateOverwrite (fivem,  {"CONNECT":false});
            const WloffEmbed = new Discord.MessageEmbed()
            .setAuthor('Whitelist', 'https://i.imgur.com/Z227Zoe.png')
            .setThumbnail('https://i.imgur.com/Z227Zoe.png')
            .setTitle('Statut Whitelist')
            .setDescription('Session terminée :x:')
            .setColor('#FF0000')
            .addFields(
                        {name: 'Revenez plus tard', value:'Des nouvelles sessions auront bientôt lieu !'}
                      )
            .setFooter(' whitelist')
            .setTimestamp()
            message.channel.send(WloffEmbed);
        } else {
            message.channel.send('Vous n\'avez pas le droit d\'utiliser cette commande');
        }

    }

}

