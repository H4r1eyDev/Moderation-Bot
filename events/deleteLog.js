const Discord = require(`discord.js`)
const chalk = require('chalk')

module.exports = {
    name: 'messageDelete',
    execute(message, H4r1ey) {

        if(!H4r1ey.config.optionalSettings.logDeletedMessages) return;

        const fortnite = H4r1ey.channels.cache.get(H4r1ey.config.loggingChannels.deletedMessageLog);
        if (!fortnite) return console.log(chalk.red('Logging for the deleted messages log can not be done! Please set it to the right channel for me to function!'));

        if(message.author.bot) return;

        const fileUpload = new Discord.MessageEmbed()
        .setDescription(`**Log:**\n\`Event\`\n**Author:**\n\`${message.author.tag} - ${message.author.id}\`\n**Reason:**\n\`USER SENT A FILE, BUT DELETED!\`\n**Message Content:**\n\`N/A\``)
        .setFooter("©️ " + H4r1ey.config.customConfig.serverCopyright, H4r1ey.config.customConfig.serverIcon)
        .setColor(H4r1ey.config.customConfig.hexID)

        if(message.content == '') return fortnite.send({embeds: [fileUpload]})
        console.log(chalk.blue(`${message.author.tag} sent and deleted a file!`))


        const embed = new Discord.MessageEmbed()
        .setDescription(`**Log:**\n\`Event\`\n**Author:**\n\`${message.author.tag} - ${message.author.id}\`\n**Reason:**\n\`USER DELETED A MESSAGE!\`\n**Message Content:**\n\`${message.content}\``)
        .setFooter("©️ " + H4r1ey.config.customConfig.serverCopyright, H4r1ey.config.customConfig.serverIcon)
        .setColor(H4r1ey.config.customConfig.hexID)

        console.log(chalk.blue(`${message.author.tag} sent and deleted a message!`))

       fortnite.send({embeds: [embed]})
    }
}