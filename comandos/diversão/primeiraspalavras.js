const Discord = require('discord.js')
var Jimp = require("jimp")

exports.run = async (bot, message, args) => {

    if (message.content.split(' ').slice(1).join(' ').length < 1) {
        message.channel.send('<a:alert:753135168255950850> Escreva algo!')
    } else {
        if (message.content.split(' ').slice(1).join(' ').length > 50) {
            message.channel.send('<a:alert:753135168255950850> Use no maximo 50 caracteres!')
        } {
                var authorMessage = message
                message.channel.send('Carregando...').then(message => {
                    Jimp.read(`https://cdn.discordapp.com/attachments/538711394137407488/567123894956457984/tirinha_baby.png`, function (err, image) {
                        if (err) message.channel.send('<a:alert:753135168255950850> Ocorreu um erro ao criar a imagem!')
                        Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
                            image.print(font, 11, 13, authorMessage.content.split(' ').slice(1).join(' ')[0] + '... ' + authorMessage.content.split(' ').slice(1).join(' ')[0] + '...', 400)
                            image.print(font, 19, 290, authorMessage.content.split(' ').slice(1).join(' '), 320)
                            var aguardeMessage = message
                            image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                                const attachment = new Discord.MessageAttachment(buffer, 'primeiraspalavras.png')
                                message.channel.send(attachment).then(message => {
                                    aguardeMessage.delete()

})
                            })
                        })
                    })
                })
            }
        }
    }


exports.help = {
    name: "primeiraspalavras",
    aliases: ['firstword']
}