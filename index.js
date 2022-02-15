const { Client, Intents  } = require('discord.js');
const dotenv = require('dotenv')
const cron = require('node-cron')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const date = new Date
const dateFormat = [
  date.getDate(),
  date.getMonth()+1,
  date.getFullYear()].join('/')+' '+ 
  'il est' + ' ' +
 [date.getHours(),
  date.getMinutes(),
  date.getSeconds()].join(':')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('hello')
  client.channels.fetch(process.env.DAILY).then(channel => {
    console.log(channel.name)
    client.channels.fetch(process.env.DAILY).then(channel => {
      channel.send('Bonjour à tous aujourd\'hui nous sommes le' + ' ' + dateFormat )
  });
  client.channels.fetch(process.env.DAILY).then(channel => {
    channel.send('Panne de reveil pour dailyBot' )
});
    console.log('hello here')
});
})


client.on('message', message => {
  if (message.content === 'help') {
    message.channel.send( 
      'Voici les commandes de DailyBot');
    message.channel.send( 
      'Hello DailyBot: hello @username');
   }

  if (message.content === 'hello DailyBot') {
    message.channel.send('hello' + ' ' + message.author.username );
   }
});


// cron.schedule('30 9 * * *', () => {
//   client.channels.fetch(process.env.DAILY).then(channel => {
//     channel.send('Bonjour à tous aujourd\'hui nous sommes le' + ' ' + dateFormat )
// });
// });

cron.schedule('0 11 * * *', () => {
  client.channels.fetch(process.env.DAILY).then(channel => {
    channel.send('Say L\'heure du daily')
});
});
cron.schedule('15 11 * * *', () => {
  client.channels.fetch(process.env.DAILY).then(channel => {
    channel.send('Le daily c\'est fini')
});
});


dotenv.config()
client.login(process.env.TOKEN);

