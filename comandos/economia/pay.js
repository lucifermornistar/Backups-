const { MessageEmbed } = require('discord.js');
const fs = require("fs"); 
const db = require("quick.db");

module.exports = {
    name: 'pay',
    aliases: ['enviar', 'darmoney'],
    category: 'Economia',
    description: 'Dê uma quantia de coins a alguém.',
    usage: `enviar @membro @quantia`,
//
run: async (client, message, args) => {
    let user = message.mentions.members.first() 

    let member = db.fetch(`economia_maos_${message.guild.id}_${message.author.id}`)

    if (!user) {
        return message.channel.send('Você precisa mencionar alguém.')
    }
    if (!args[1]) {
        return message.channel.send('Você precisa definir a quantia de coins que quer enviar.')
    }
    if (message.content.includes('-')) {
        return message.channel.send('Sua conta está negativa!')
    }

    if (member < args[1]) {
        return message.channel.send(`Você não possui ${args[1]} coins para enviar!`)
    }

    message.channel.send(`${message.author.tag}, Você enviou ${args[1]} coins para ${user.user.username}.`)
    db.add(`economia_maos_${message.guild.id}_${user.id}`, args[1])
    db.subtract(`economia_maos_${message.guild.id}_${message.author.id}`, args[1])
}
}