/*onst Discord = require("discord.js");
 
exports.run = (bot, message, args) => {
 
    let embed = new Discord.MessageEmbed()
 
    .setColor('BLUE')
    .setTimestamp(`${message.createdAt}`)
    .setTitle(`<a<a:discord:753032823861936222>755080963372875837> ${message.guild.name}`)
    .setDescription(`clique [aqui](https://discord.gg/abEjMt8) para baixar a foto`)
    .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32}))
    .setImage(message.guild.iconURL())
 
    message.reply(embed)
 
}
 exports.help = {
name: 'servericon',
aliases: ['imagem']
}*/

 const Discord = require("discord.js")
exports.run = async(client, message, args,)=> {

let simg = `https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.png?size=2048`
        let icone = new Discord.MessageEmbed()
        .setDescription("Ícone do servidor:")
        .setImage(simg)
        .setColor('RANDOM')
        message.channel.send(icone)
}
