const Discord = require(`discord.js`)
const chalk = require('chalk')

module.exports = {
    name: 'messageCreate',
    execute(message, H4r1ey) {

        if (H4r1ey.config.optionalSettings.usePingPrevention) {


            if (message.author.bot) return;
            if (message.deleted) return;
            if (!message.guild) return;

            const embed = new Discord.MessageEmbed()
            .setDescription(`<@${message.author.id}> Please do not ping me!`)
            .setColor(H4r1ey.config.customConfig.hexID)

                if (message.member.roles.cache.some((r) => H4r1ey.config.optionalSettings.bypassPingPreventionRoles.includes(r.id)))
                return;

            if (H4r1ey.config.optionalSettings.pingPreventedMember.some(e => message.content.toLowerCase().includes(e))) {
                message.channel.send({ embeds: [embed] });
                console.log(chalk.blue(`${message.author.tag} pinged a prevented member!`))

                if(H4r1ey.config.optionalSettings.dmUsersWhenPingingPreventedMembers) {
                    const embed35 = new Discord.MessageEmbed()
                    .setTitle("You've received an automatic warning!")
                    .setColor(H4r1ey.config.customConfig.hexID)
                    .setDescription("You've been warned for pinging prevented members! Your message: " + `|| ${message.content} ||`)
                    .setFooter("©️ " + H4r1ey.config.customConfig.serverCopyright, H4r1ey.config.customConfig.serverIcon)
                    message.author.send({ embeds: [embed35] }).catch(err => console.log(chalk.red(`Error. Could not send the message to that user. More information: ${err}`)))
                }

                return;
            }

        }
    }
}