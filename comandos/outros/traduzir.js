const translate = require('@vitalets/google-translate-api');
const Discord = require('discord.js');
let langs = {
    "auto": "Automatic",
    "ar": "Arabe",
    "eng": "Inglês",
    "en": "Inglês",
    "fr": "Frances",
    "nl": "Holandes",
    "de": "Alemão",
    "el": "Grego",
    "it": "Italiano",
    "ja": "Japones",
    "jw": "Javanes",
    "kn": "Kannada",
    "ko": "Coreano",
    "pt": "Portugues",
    "ro": "Romano",
    "ru": "Russo",
    "es": "Espanhol"
}

module.exports.run = async (client, message, args) => {
 
  if (!args[0]) {
    return message.channel.send(`Use dessa forma: s!traduzir <lingua> + <lingua> <mensagem>`)
  }
  
  let msg = args.slice(2).join(' ');
  translate(msg, { from: args[0], to: args[1] }).then(res => {
     let embed = new Discord.MessageEmbed()
      .setAuthor(`${message.author.username}`)
      .setTitle(`Google Tradutor`)
      .setColor('BLUE')
      .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/d/db/Google_Translate_Icon.png')
      .setDescription(`Texto traduzido de: ` + "`" + `${langs[args[0]]}` + "`" + " para " + "`" + `${langs[args[1]]}` + "`")
      .setFooter(`Comando pedido por: ${message.author.tag}`, message.author.avatarURL)
      .addField('Texto original:', msg)
      .addField(`Texto traduzido:`, res.text)   
      .setTimestamp()
    
    message.channel.send(embed)
  

  }).catch(err => {
    console.log(err)
    message.channel.send('<a:pin:753638048385990686> Desculpe mas essa lingua não existe.')
  })
};