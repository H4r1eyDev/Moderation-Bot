module.exports = {
    name: 'say',
    execute(message, args, H4r1ey, Discord) {
        if (H4r1ey.config.optionalSettings.logCommands) {
            const channel = H4r1ey.channels.cache.get(H4r1ey.config.loggingChannels.commandLoggingChannel);
            if (!channel) return console.log(chalk.red(`The channel ID set for the say command is in-correct. Please re-config!`))
            const embed = new Discord.MessageEmbed()
                .setDescription(`**Log:**\n\`Command\`\n**Author:**\n\`${message.author.tag} - ${message.author.id}\`\n**Command:**\n\`SAY\``)
                .setFooter("©️ " + H4r1ey.config.customConfig.serverCopyright, H4r1ey.config.customConfig.serverIcon)
                .setColor(H4r1ey.config.customConfig.hexID)
            channel.send({
                embeds: [embed]
            })
        } // end of command log



        const per = H4r1ey.config.permissionSetup.sayCommandPerms
        if (message.member.roles.cache.some(h => per.includes(h.id))) {


            const embedOn = new Discord.MessageEmbed()
            .setDescription(`<@${message.author.id}> You must provide something to say!`)
            .setColor(H4r1ey.config.customConfig.hexID)

            const text = args.join(" ");
            if(!text) return message.channel.send({ embeds: [embedOn] })

            message.channel.send({ content: text })
            message.delete();


            if (H4r1ey.config.optionalSettings.logSayCommand) {
                const channel2 = H4r1ey.channels.cache.get(H4r1ey.config.loggingChannels.sayLoggingChannel);
                if (!channel2) return console.log(chalk.red(`The channel ID set for the say command is in-correct. Please re-config!`))
                const embed46 = new Discord.MessageEmbed()
                    .setDescription(`**Log:**\n\`SAY\`\n**Moderator:**\n\`${message.author.tag} - ${message.author.id}\`\n**Message Sent:**\n\`${message.content}`)
                    .setFooter("©️ " + H4r1ey.config.customConfig.serverCopyright, H4r1ey.config.customConfig.serverIcon)
                    .setColor(H4r1ey.config.customConfig.hexID)
                channel2.send({
                    embeds: [embed46]
                })
            }


        } else {
            const embed2 = new Discord.MessageEmbed()
                .setDescription(`<@${message.author.id}> You do not have the required permissions!`)
                .setColor(H4r1ey.config.customConfig.hexID)
            message.channel.send({
                embeds: [embed2]
            })
        }

    }
}