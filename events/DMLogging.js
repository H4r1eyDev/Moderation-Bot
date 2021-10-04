const Discord = require(`discord.js`)
const chalk = require('chalk')

module.exports = {
    name: 'messageCreate',
    execute(message, H4r1ey) {

        if(!H4r1ey.config.optionalSettings.logBotDMs) return;

        const fortnite = H4r1ey.channels.cache.get(H4r1ey.config.loggingChannels.botDMLogger);
        if (!fortnite) return console.log(chalk.red('Logging for the bot DM\'s can not be done! Please set it to the right channel for me to function!'));

        if (message.author.bot) return;
        if(message.channel.type !== 'dm') return;
            
        const embed = new Discord.MessageEmbed()
        .setDescription(`**Log:**\n\`Event\`\n**Author:**\n\`${message.author.tag} - ${message.author.id}\`\n**Reason:**\n\`USER SENT A MESSAGE TO THE BOT!\`\n**Message Content:**\n\`${message.content}\``)
        .setFooter("©️ " + H4r1ey.config.customConfig.serverCopyright, H4r1ey.config.customConfig.serverIcon)
        .setColor(H4r1ey.config.customConfig.hexID)
    
        fortnite.send({ embeds: [embed] })
        console.log(chalk.blue(`${message.author.tag} DMd the Bot!`))

    }
}