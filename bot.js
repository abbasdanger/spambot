const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Gk7o `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === '-—« »'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '-„»·€'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '-—Ì»'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-—« »'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '-„»·€'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-—Ì»'){
        message.channel.send('#credits')
    }
});



client.on('message', message => { // ·«  €Ì— ‘∆ ⁄‘«‰ „«  Œ—» «·œ‰Ì«
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Gk7o , Farm Credit By Gk7o, ez Farm - ·⁄ÌÊ‰ ⁄»«” «·”»«„ **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // ·«  €Ì— ‘∆ ⁄‘«‰ „«  Œ—» «·œ‰Ì«
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Gk7o , Farm Credit By Gk7o, ez Farm - ·⁄ÌÊ‰ ⁄»«” «·”»«„ **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});




client.login(process.env.TOKEN);// ·«  €Ì— ›ÌÂ« ‘Ì¡
client2.login(process.env.TOKEN2);// ·«  €Ì— ›ÌÂ« ‘Ì¡