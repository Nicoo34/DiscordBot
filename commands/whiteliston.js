module.exports = {
    name:'wlon',
    description: "Lance une session whitelist!",
    async execute(client, message, args, Discord) {
        if(message.member.roles.cache.some(r => r.name === "👮🏻 | Douanier")){
            const waitning_channel = message.guild.channels.cache.find(c => c.name === "🛂-Attente WL-🛂");
            const fivem = message.guild.roles.cache.get("619439590465339398");
	    const newbie = message.guild.roles.cache.get("619439735420616704");
            await waitning_channel.updateOverwrite (newbie,  {"CONNECT":true});
            await waitning_channel.updateOverwrite (fivem,  {"CONNECT":true});
            const WlonEmbed = new Discord.MessageEmbed()
            .setAuthor('Whitelist', 'https://i.imgur.com/Z227Zoe.png')
            .setThumbnail('https://i.imgur.com/Z227Zoe.png')
            .setTitle('Statut Whitelist')
            .setDescription('Session ouverte :white_check_mark:')
            .setColor('#04b527')
            .addFields(
                        {name: 'Âge requis :underage:', value:'Vous devez avoir **18 ans** ou plus.'},
                        {name: 'Pseudo discord :bangbang:', value:'Votre **Prénom Nom** de votre personnage doit être renseigné sur **discord** et **steam**.'},
                        {name: 'Micro de qualité :microphone2:', value:'Micro correct requis'},
                        {name: 'Règlement :pushpin:', value:'Vous devez avoir pris connaissance du <#793468733338419201>'},
                        {name: 'Background :genie:', value:'Aucun background de votre personnage ne vous ait nécessairement demandé, mais en avoir un c\'est toujours mieux !'}
                      )
            .setFooter('Whitelist')
            .setTimestamp()
            message.channel.send(`<@&619439735420616704> ! veuillez vous placer dans le canal <#797814078520164382>`);
            message.channel.send(WlonEmbed);
        } else {
            message.channel.send('Vous n\'avez pas le droit d\'utiliser cette commande');
        }
        
    }

}

