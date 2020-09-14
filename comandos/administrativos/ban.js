const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

let xdemb = new Discord.MessageEmbed()
        .setColor('#04FFF7')
        .setTitle('<:slaaa:753647475721764945> • Sistema de ban - saphira™')
        .addField(
            '<a:pin:753638048385990686> Descrição:',
            '`Da um ban em algum usuário`')
        .addField(
            '<:pasta:753639072425312346> Exemplo',
            `${bot.prefixo}ban <@usuario> [motivo]`,
            true) //Marcação para eu lembrar algum dia. , true para não ficar com "undefined" ${bot.prefixo} para mostrar o prefixo do bot.
        .addField(
            "<:diam:753132496555868161> Como usar",
            `${bot.prefixo}ban @Patin flod`,
            true)

    if(message.member.permissions.has("BAN_MEMBERS")) { 
     if(!message.guild.me.permissions.has(["BAN_MEMBERS"])) return message.channel.send("<a:alert:753135168255950850> | Eu não tenho a permissão ``BAN_MEMBERS`` para banir algum usuário.")
      
    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
    if(!member.bannable) return message.channel.send("<a:alert:753135168255950850> | Eu não consigo banir este usuário!")
    if(member.user.id === "seu_id") return message.channel.send("<a:alert:753135168255950850> | Eu não consigo banir o dono!")

    if(member.id === message.author.id) return message.channel.send("<a:alert:753135168255950850> | Você não pode banir a si mesmo!")

  let reason = args.slice(1).join(" ");
    if(!reason) {
      return message.channel.send("<a:alert:753135168255950850> | Você precisa especificar alguma razão.");
    } else {
       var res = reason
    }

    await member.ban(reason).catch(error => message.channel.send(`Desculpe eu não consegui por causa de: ${error}`));

    let staff = new Discord.MessageEmbed()
      .setColor("#00FFFF")
      .setTitle(":warning: | Ban")
      .setDescription("O usuário: <@"+member.id+"> foi banido por <@"+message.author.id+"> Motivo\n```"+res+"```")
      .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({Size: 32}))
      .setTimestamp()
      .setFooter("ID do usuário: "+message.author.id)
    
    message.channel.send(staff)
      
    message.delete()
    } else {
      return message.channel.send("<a:alert:753135168255950850> | Você não tem permissões para fazer isso!");
    }
  }