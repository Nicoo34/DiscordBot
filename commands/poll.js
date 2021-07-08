module.exports = {
    name:'poll',
    description: "Lance un sondage!",
    async execute(client, message, args, Discord){
        if(message.member.roles.cache.some(r => r.name === "👮🏻 | Douanier")){
	    const messageArray = message.content.split(' ');
	    const args = messageArray.slice(1);
	    const pollDescription = args.slice(1).join(' ');
            const PollEmbed = new Discord.MessageEmbed()
            .setColor('#FFA600')
            .setTitle("Nouveau sondage")
            .setDescription(pollDescription)
            .setFooter(`${message.author.username} a lancé ce sondage.`)
            let msg = await message.channel.send(PollEmbed);
            await msg.react('👍')
            await msg.react('👎')
        } else {
            message.channel.send('Vous n\'avez pas le droit d\'utiliser cette commande');
        }

    }

}

