const config = require('./config.json')
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();

async function bump(channel_id) {
    const channel = client.channels.cache.get(channel_id) 
    await channel.send('!d bump')
    return true
}

client.on('ready', () => {
      console.log('Auto-Bumper ready')
      bump(config.channel_id)
      setInterval(() => {
            bump(config.channel_id)
      }, 7200000)
})

client.login(token)
