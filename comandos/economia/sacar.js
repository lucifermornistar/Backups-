const { MessageEmbed } = require('discord.js');
const fs = require("fs"); 
const db = require("quick.db");

module.exports = {
    name: 'sacar',
    aliases: ['bancosacar'],
    category: 'Economia',
    description: 'Deposite uma quantia de coins em seu banco.',
    usage: `sacar @quantia`,
//
run: async (client, message, args) => {
    let user = message.author;

    let member = db.fetch(`economia_banco_${message.guild.id}_${user.id}`)

    if (!args[0]) {
        return message.channel.send('Você precisa escrever a quantia de coins que quer sacar em seu banco.')
    }
    if (message.content.includes('-')) {
        return message.channel.send('Sua conta está negativa!')
    }

    if (member < args[0]) {
        return message.channel.send(`Você não possui ${args[0]} coins para sacar!`)
    }

    message.channel.send(
    new MessageEmbed()
    .setTitle(`<:yaa_dinheiro:754867174484738056> Banco <:yaa_dinheiro:754867174484738056>`)
    .setDescription(`${user} acaba de sacar ${args[0]} coins em seu banco.`)
    .setColor("#67837")
    .setFooter(`Saque feito por ${message.author.username}`)
    .setTimestamp())
    db.subtract(`economia_banco_${message.guild.id}_${user.id}`, args[0])
    db.add(`economia_maos_${message.guild.id}_${user.id}`, args[0])
}
}