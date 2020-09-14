const discord = require('discord.js')

module.exports = {
  name:"mcreward",
  aliases: ['mcconquista','mcReward','mcConquista'],
  run: async (client, message, args) => {
  let reward = args.join("+")
  if(!reward) message.channel.send('<a:alert:753135168255950850> coloque algo para aparecer na conquista')
    
    if(reward.length > 23) return message.channel.send('Somente 23 caracteres')
    
    let embed = new discord.MessageEmbed()
    .setColor("GREEN")
    .setImage(`https://mcgen.herokuapp.com/a.php?i=5&h=Nova+conquista&t=${reward}`)
    
    message.channel.send(embed)
  }
}