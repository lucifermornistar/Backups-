module.exports = async (bot) => { //faz algo qdo o bot liga
  console.log('!!! estou pronto para ser usado !!!\n  To de olho em '+bot.channels.cache.size+' canais (chats + calss)');

  
  const status = [
    "idle",
    "online",
    "dnd"
  ]
  
  const atividades = [
     ["CRIADA POR !   P a t i n ™#9275 ", "STREAMING"],
     ["#FIQUEEMCASA É SE DIVIRTA COMIGO! ❤", "STREAMING"],     ["DUVIDAS? FALE CONOSCO PELO NOSSO SUPORTE", "STREAMING"],
     ["🚀 TORNE-SE UM PATROCINADOR PARA ME AJUDAR A FICAR ONLINE!", "STREAMING"],
     ["Obrigado pela preferencia! ❤", "STREAMINH"],
     ["AINDA ESTOU EM BETA MAS LOGO LOGO TEREI ATUALIZAÇÕES INCRIVEIS ❤", "WATCHING"]
];
  setInterval(async () => { // controlar o intervalo
    let i = Math.floor(Math.random() * atividades.length + 1) - 1
      await bot.user.setActivity(atividades[i][0], { type: atividades [i][1] });
  }, 10000); // intervalo

  setInterval(async () => {
    let b = Math.floor(Math.random() * status.length + 1) - 1
      await bot.user.setStatus(status[b])
  }, 20000)
  

}
