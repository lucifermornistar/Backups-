const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: 'trabalhar',
    aliases: ['work', 'trabalho', 'working'],
    category: 'Economia',
    description: 'Trabalhe para ganhar coins',
    usage: `trabalhar`,
//
run: async (client, message, args) => {
        let user = message.author;
        
        let delay = 7200000; //Aqui você coloca o tempo em milisegundos
        let author = await db.fetch(`delay_trabalho_${message.guild.id}_${user.id}`);

        if(author !== null && delay - (Date.now() - author) > 0){
            let time = ms(delay - (Date.now() - author));
            return message.channel.send(
            new MessageEmbed()
            .setAuthor(`${user.tag}`, user.displayAvatarURL({ dynamic: true }))
            .setDescription(`${user} Você já trabalhou hoje!, descanse e volte em ${time.hours}h, ${time.minutes}m, ${time.seconds}s`)
            .setColor("#36393F"))
        } else {
            let salario = Math.floor(Math.random() * 555);
            db.add(`economia_maos_${message.guild.id}_${user.id}`, salario)
            db.set(`delay_trabalho_${message.guild.id}_${user.id}`, Date.now())

            message.channel.send(
            new MessageEmbed()
            .setAuthor(`${user.tag}`, user.displayAvatarURL({ dynamic: true }))
            .setDescription(`${user} Você trabalhou como Empresário e recebeu ${salario} coins.`)
            .setColor("#36393F")
            .setTimestamp())
        }
    }
}