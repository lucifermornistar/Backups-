const { MessageEmbed } = require('discord.js');
const fs = require("fs"); 
const db = require("quick.db");

module.exports = {
    name: 'depositar',
    aliases: ['bancodepositar'],
    category: 'Economia',
    description: 'Deposite uma quantia de coins em seu banco.',
    usage: `depositar @quantia`,
//
run: async (client, message, args) => {
    let user = message.author;

    let member = db.fetch(`economia_maos_${message.guild.id}_${user.id}`)

    if (!args[0]) {
        return message.channel.send('Você precisa escrever a quantia de coins que quer depositar em seu banco.')
    }
    if (message.content.includes('-')) {
        return message.channel.send('Sua conta está negativa!')
    }

    if (member < args[0]) {
        return message.channel.send(`Você não possui ${args[0]} coins para depositar!`)
    }

    message.channel.send(
    new MessageEmbed()
    .setTitle(`:banco: Banco :banco:`)
    .setDescription(`${user} acaba de depositar ${args[0]} coins em seu banco.`)
    .setColor("#36393F")
    .setFooter(`Deposito feito por ${message.author.username}`)
    .setTimestamp())
    db.subtract(`economia_maos_${message.guild.id}_${user.id}`, args[0])
    db.add(`economia_banco_${message.guild.id}_${user.id}`, args[0])
}
}