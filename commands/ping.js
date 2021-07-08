module.exports = {
    name:'ping',
    description: "viens jouer avec moi!",
    execute(client, message, args, Discord){
        if(message.member.roles.cache.some(r => r.name === "👮🏻 | Douanier")){
          message.channel.send('pong!')
        } else {
            message.channel.send('Vous n\'avez pas le droit d\'utiliser cette commande');
        }
    }
}