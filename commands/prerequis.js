module.exports = {
    name:'prereq',
    description: "Indique les pré-requis!",
    async execute(client, message, args, Discord){
        if(message.member.roles.cache.some(r => r.name === "👮🏻 | Douanier")){
            const WlonEmbed = new Discord.MessageEmbed()
            .setAuthor('Info', 'https://i.imgur.com/Z227Zoe.png')
            .setThumbnail('https://i.imgur.com/Z227Zoe.png')
            .setTitle('Pré-requis')
            .setDescription('Info avant whitelist :warning:')
            .setColor('#FFA500')
            .addFields(
                {name: 'Âge requis :underage:', value:'Vous devez avoir **18 ans** ou plus.'},
                {name: 'Micro de qualité :microphone2:', value:'Micro correct requis'},
		{name: 'Pseudo :bangbang:', value:'Votre **Prénom Nom** de votre personnage doit être renseigné sur **discord** et **steam**.'},
                {name: 'Règlement :pushpin:', value:'Vous devez avoir pris connaissance du <#793468733338419201>'},
                {name: 'Règle du RP :nerd:', value:'Vous devez au minimum connaitre les fondamentaux du RP'}
                      )
            .setFooter(' whitelist')
            .setTimestamp()
            message.channel.send(WlonEmbed);
        } else {
            message.channel.send('Vous n\'avez pas le droit d\'utiliser cette commande');
        }

    }

}

