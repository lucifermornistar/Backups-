const Discord = require("discord.js");
const config = require('../../config.json');
exports.run = (client, message, args) => {

  const prefixo = config.prefix;
//
   const embed = new Discord.MessageEmbed()
  .setColor(`#00D5FF`)
  .setTitle(`<a:yay:753133105274945547> • saphira™`)
  .setDescription(`Olá <@${message.author.id}>, me chamo saphira™ sou uma bot de moderação e diversão para o seu discord!\n\n<a:pin:753638048385990686> Informações:\nSou apenas uma simples bot para o seu discord, feita para deixar seu grupo melhor o possivel é seguro.\n\n<:pasta:753639072425312346> Comandos:\n\n<:emoji1:753132246646521977> | administrativos\n<:emoji2:753132316347334686> | diversão\n<:emoji3:753132381833265222> | gerais\n\n:link: links:\n<:diam:753132496555868161> | [Me adicione!](https://discord.com/oauth2/authorize?client_id=753128836891279462&scope=bot&permissions=8)\n<:diam:753132496555868161> | [meu suporte!](https://discord.gg/u5bcQZs)`)

 message.channel.send(embed).then(msg => {
        message.react("753133105274945547");
        msg.react(`753132246646521977`)
        msg.react(`753132316347334686`)
        msg.react(`753132381833265222`)
        //faz o bot adicionar reações.

        let filtro = (reaction, user) => reaction.emoji.id === "753132246646521977" && user.id == message.author.id;
        let filtro2 = (reaction, user) => reaction.emoji.id === "753132316347334686" && user.id == message.author.id;
        let filtro3 = (reaction, user) => reaction.emoji.id === "753132381833265222" && user.id == message.author.id;
//filtra as reações

        let coletor = msg.createReactionCollector(filtro);
        let coletor2 = msg.createReactionCollector(filtro2);
        let coletor3 = msg.createReactionCollector(filtro3);
//coleta todas as reações.

        coletor.on('collect', () => {
            const embed1 = new Discord.MessageEmbed()
   .setColor(`#00D5FF`)
   .setTitle(`<a:sapatin:753133127588905010> | comandos administrativos - saphira`)
   .setDescription('Seja bem vindo ao painel ``administrativo`` da saphira!\n**s!<comando>**\n<:seta:753699408687923344> **ban** ``da um ban em um usuário.``') 
            msg.edit(embed1);
            msg.react('753479621298749550');

            let filtroback = (reaction, user) => reaction.emoji.id == "753479621298749550" && user.id == message.author.id;
            let coletorback = msg.createReactionCollector(filtroback);
            coletorback.on('collect', () => {
                msg.edit(embed);
            });

coletor2.on('collect', () => {
  const embed2 = new Discord.MessageEmbed()
   .setColor(`#00D5FF`)
   .setTitle('<a:sapatin:753133127588905010> | comandos diversão - saphira')
   .setDescription('Seja bem vindo ao painel de ``diversão`` da saphira!\n**s!<comando>**')
            msg.edit(embed2);
            msg.react('753479621298749550');

            let filtroback = (reaction, user) => reaction.emoji.id == "753479621298749550" && user.id == message.author.id;
            let coletorback = msg.createReactionCollector(filtroback);
            coletorback.on('collect', () => {
                msg.edit(embed);
            });
        });

coletor3.on('collect', () => {
  const embed3 = new Discord.MessageEmbed()
      .setColor(`#00D5FF`)
      .setTitle(`<a:sapatin:753133127588905010> | comandos gerais - saphira`)
      .setDescription('seja bem vindo ao painel ``geral`` da saphira!\n**s!<comando>**\n\n<:seta:753699408687923344> **lembrete** ``<tempo em numeros> <s/m/h/d> <lembrete>``\n<:seta:753699408687923344> **avatar** ``para ver o avatar de algum usuário``\n<:seta:753699408687923344> **servericon** ``veja a icon do servidor``\n<:seta:753699408687923344> **userinfo** ``<@usuario> Veja suas informações ou de um usuario``')
            msg.edit(embed3);
            msg.react('753479621298749550');

            let filtroback = (reaction, user) => reaction.emoji.id == "753479621298749550" && user.id == message.author.id;
            let coletorback = msg.createReactionCollector(filtroback);
            coletorback.on('collect', () => {
                msg.edit(embed);
            });
        });
});
})
exports.help = {
  name: 'gg',
  aliases: []
}
}
