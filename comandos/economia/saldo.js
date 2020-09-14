const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
//
module.exports = {
    name: 'coins',
    aliases: ['saldo', 'money', 'coin'],
    category: 'Economia',
    description: 'Veja a quantidade de coins que você tem.',
    usage: `coins`,
//
run: async (client, message, args) => {
    var person = message.mentions.users.first() || message.author;
    var maos = db.fetch(`economia_maos_${message.guild.id}_${person.id}`)
    var banco = db.fetch(`economia_banco_${message.guild.id}_${person.id}`)
    //
    //
    let frasebanco;
    if (db.fetch(`economia_banco_${message.guild.id}_${person.id}`) !== 1) frasebanco = `coins`;
    if (db.fetch(`economia_banco_${message.guild.id}_${person.id}`) === null) frasebanco = `Você não tem coins depositado no banco.`;
    //
    let frasecoin;
    if (db.fetch(`economia_maos_${message.guild.id}_${person.id}`) !== 1) frasecoin = `coins`;
    if (db.fetch(`economia_maos_${message.guild.id}_${person.id}`) === null) frasecoin = `você não tem coins.`;
    const embed = new MessageEmbed()
        .setColor('#36393F')
        .addField(`<a:here_comes_the_money:754868604746596416>・Usuário`, person.username, true)
        .addField('👤・Coins', [
                `<:diam:754867428361764897>**・Em mãos:** \n\u200b ${maos} ${frasecoin}`,
                `<:yaa_dinheiro:754867174484738056>**・Banco:** \n\u200b ${banco} ${frasebanco}`,
            ])
    //
    await message.channel.send(embed);
}
}