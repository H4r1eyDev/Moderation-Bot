const Discord = require(`discord.js`)
const chalk = require('chalk')

module.exports = {
    name: 'messageCreate',
    execute(message, H4r1ey) {

        if (H4r1ey.config.optionalSettings.deleteLinks) {


            if (message.author.bot) return;
            if (message.deleted) return;
            if (!message.guild) return;

            const embed = new Discord.MessageEmbed()
                .setColor(H4r1ey.config.customConfig.hexID)
                .setDescription(`<@${message.author.id}> Please do not post that link here!`)

            if (message.member.roles.cache.some((r) => H4r1ey.config.optionalSettings.bypassLinkPrevention.includes(r.id)))
                return;

            if (H4r1ey.config.optionalSettings.bannedLinks.some(e => message.content.toLowerCase().includes(e))) {
                message.delete();
                message.channel.send({
                    embeds: [embed]
                });
                console.log(chalk.blue(`${message.author.tag} posted a bad link in ${message.channel.name}`))

                if (H4r1ey.config.optionalSettings.dmUsersAfterPostingBadLinks) {
                    const embed35 = new Discord.MessageEmbed()
                        .setTitle("You've received an automatic warning!")
                        .setColor(H4r1ey.config.customConfig.hexID)
                        .setDescription("You've been warned for posting bad links within our chats! Your message: " + `|| ${message.content} ||`)
                        .setFooter("©️ " + H4r1ey.config.customConfig.serverCopyright, H4r1ey.config.customConfig.serverIcon)
                    message.author.send({
                        embeds: [embed35]
                    }).catch(err => console.log(chalk.red(`Error. Could not send the message to that user. More information: ${err}`)))
                }


                if (H4r1ey.config.optionalSettings.logBadLinks) {
                    const channel = H4r1ey.channels.cache.get(H4r1ey.config.loggingChannels.badLinksLogging);
                    if (!channel) return console.log(chalk.red(`The channel ID set for the bad link command is in-correct. Please re-config!`))
                    const embed = new Discord.MessageEmbed()
                        .setDescription(`**Log:**\n\`Event\`\n**Author:**\n\`${message.author.tag} - ${message.author.id}\`\n**Reason:**\n\`USER POSTED A BAD LINK!\`\n**Message Content:**\n\`${message.content}\``)
                        .setFooter("©️ " + H4r1ey.config.customConfig.serverCopyright, H4r1ey.config.customConfig.serverIcon)
                        .setColor(H4r1ey.config.customConfig.hexID)
                    channel.send({
                        embeds: [embed]
                    })
                }

                return;
            }
        }
    }
}