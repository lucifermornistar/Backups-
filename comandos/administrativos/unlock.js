exports.run = (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("<a:alert:753135168255950850> voce não tem permissão para executar este comando!");  message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: null //para fazer un comando de unlockchat e so mudar o false para null 
    })

      message.channel.send(`<@${message.author.id}> 🔓 O canal foi destrancado com sucesso!`);
  };