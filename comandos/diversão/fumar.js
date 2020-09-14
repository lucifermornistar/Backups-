exports.run = async (bot, message, args) => {
  await bot.util.delayFor(1000)
  let msg = message.channel.send("🚬").then(async msg => {
    
    await bot.util.delayFor(1000)
    msg.edit("🚬☁").then(async mc => {
      await bot.util.delayFor(1000);
      msg.edit("🚬☁☁").then(async fm => {
        await bot.util.delayFor(1000);
        msg.edit("🚬☁☁☁").then(async gh => {
          await bot.util.delayFor(1000);
          msg.edit("🚬☁☁").then(async ag => {
            await bot.util.delayFor(1000);
            msg.edit("🚬☁").then(async bo => {
              await bot.util.delayFor(1000);
              msg.edit("🚬").then(async final => {
                await bot.util.delayFor(1000);
                msg.edit("não fumem crianças!(alem de fazer mal ao seu pulmão, você pode pegar câncer!)")
              });
            });
          });
        });
      });
    });
  })
}