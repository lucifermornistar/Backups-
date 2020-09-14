const Discord = require("discord.js");
const config = require("../../config.json")

module.exports.run = async (bot, message, args) => {
  let botembed = new Discord.MessageEmbed()
.setColor("BLUE")
.setTitle("Olá, me chamo shipara!")
.setDescription(`<a:estrela:747824276912209950> Olá, tudo bem? Me chamo saphira(Mas para amigos(as) mais proximos(as) saph).\nTenho 18 aninhos e meu sonho e transformar o discord em um lugar melhor!\nTenho muitos comandos que você e seus players irão gostar\nCom comandos moderativos para deixar seu grupo seguro e agradavel!\nMeu prefixo nesse servidor e:\ns!\nAtualmente com:\n<:player2:747824246381609040>» ${client.users.cache.size} Players`)
    message.channel.send(botembed);
}

module.exports.info = {
  name: "embed",
  aliases: ["embed"]
}