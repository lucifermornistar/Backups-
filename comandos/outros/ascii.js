const figlet = require('figlet');

module.exports = {
    name: "ascii",
    description: "Converte texto em ascii",
    category: "text",
    run: async(bot, message, args)=>{
        if(!args[0]) return message.channel.send('Forneça algum texto.');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Algo deu errado');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('Forneça um texto com menos de 2000 caracteres.')

            message.channel.send('```' + data + '```')
        })
    }
}