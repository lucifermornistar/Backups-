const Discord = require('discord.js')
module.exports = async (bot, message) => { //cuida do evento de mensagens enviadas em chat 
  if(message.author.bot)//se for msg privada ou de bot -> cai fora
    return; ///  || !message.guild
    
    
    
        
    ///faz com que o bot interaja com a menssagem:

if (message.content.toLowerCase().includes("oi,tudo bem?")){
    message.channel.send("tudo e você?")
    message.react('753133105274945547')
}
if (message.content.toLowerCase().includes("está tudo bem")){
    message.channel.send("Que ótimo!")
    message.react('753133105274945547')
}

///faz O bot responder se for mencionado
      if(!message.content.startsWith(bot.prefixo)){//se a msg não inicia com o prefixo 
      
      
    var mencionados = message.mentions.members;
    if(mencionados.size && mencionados.has("753128836891279462")) {
     /*(essa é a antiga) return message.channel.send("  | Olá, Meu prefixo neste servidor é `"+bot.prefixo+"`, para ver o que eu posso fazer, use `"+bot.prefixo+"ajuda`!")*/
    const mencionados = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setDescription(" <a:sapatin:753133127588905010> | Olá, Meu prefixo neste servidor é `"+bot.prefixo+"`, para ver o que eu posso fazer, use `"+bot.prefixo+"ajuda`!")
        //não mexe a partir daq
   return message.channel.send(mencionados)
 
 
    } else    
      return;//-> cai fora
      } //acaba aqui 
      
  //if(message.content.startsWith("=="))//se for comando de outro bo com o prefixo ==
  //  return;
  
  var arg_texto = message.content.slice(bot.prefixo.length); //remove o prefixo da msg
  var argumentos = arg_texto.trim().split(/ +/g); //divide a msg do comando
  var comando = argumentos.shift().toLowerCase(); //pega o comando, taca pra minúsculo
  
  var chat = message.channel;
  let remover = comando.length+1;
  arg_texto = arg_texto.slice(remover);
  
  switch(comando){
   case "help":
   case "comandos":
    comando = "ajuda"; break;
  }
  
  
  if(bot.pastas[comando] && bot.pastas[comando].includes("comandos")){
    
    /*if(!message.guild && !["ping", "litten", "eevee", "comandos", "ajuda", "raça", "r", "magia", "classes", "D&D"].includes(comando)){//se é mensagem privada, bloqueia se não for esses comandos
      return chat.send("Este comando não pode ser executado no privado!"); 
    }*/
    
    console.log(message.author.tag + '  ' + bot.prefixo + comando + ' ' + arg_texto);
    bot[comando](bot, message, argumentos, arg_texto, chat); //// client, mensagem, comando, argumentos, msg_str, chat, mlog, acesso
    
  }else{//Se não existe o comando, cai fora
    if(!message.guild){//se é mensagem privada
      return; //cai fora
    }
    const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} ,Este comando não é valido, use algum comando que realmente existe!`)
   await message.channel.send(embed)  
  }
}