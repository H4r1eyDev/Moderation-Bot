module.exports = {
    name: 'clear',
    description: "clear messages in a channel!",
    async execute(message, args, H4r1ey, Discord) {

        if (H4r1ey.config.optionalSettings.logCommands) {
            const channel = H4r1ey.channels.cache.get(H4r1ey.config.loggingChannels.commandLoggingChannel);
            if (!channel) return console.log(chalk.red(`The channel ID set for the clear command is in-correct. Please re-config!`))
            const embed = new Discord.MessageEmbed()
                .setDescription(`**Log:**\n\`Command\`\n**Author:**\n\`${message.author.tag} - ${message.author.id}\`\n**Command:**\n\`PURGE\``)
                .setFooter("©️ " + H4r1ey.config.customConfig.serverCopyright, H4r1ey.config.customConfig.serverIcon)
                .setColor(H4r1ey.config.customConfig.hexID)
            channel.send({
                embeds: [embed]
            })
        } // end of command log

        const embed1 = new Discord.MessageEmbed()
            .setDescription(`<@${message.author.id}> You must enter the amount of messages you want to clear!`)
            .setColor(H4r1ey.config.customConfig.hexID)

        if (!args[0]) return message.reply({
            embeds: [embed1]
        });

        const embed2 = new Discord.MessageEmbed()
            .setDescription(`<@${message.author.id}> Please enter a number between 1-100`)
            .setColor(H4r1ey.config.customConfig.hexID)

        if (isNaN(args[0])) return message.reply({
            embeds: [embed2]
        });

        const embed3 = new Discord.MessageEmbed()
            .setDescription(`<@${message.author.id}> You cannot clear more than 100 messages at a time!`)
            .setColor(H4r1ey.config.customConfig.hexID)

        if (args[0] > 100) return message.reply({
            embeds: [embed3]
        });

        const embed4 = new Discord.MessageEmbed()
            .setDescription(`<@${message.author.id}> The number entered needs to be greater than 1`)
            .setColor(H4r1ey.config.customConfig.hexID)

        if (args[0] < 1) return message.reply({
            embeds: [embed4]
        })

        const per = H4r1ey.config.permissionSetup.clearChatCommandPerms
        if (message.member.roles.cache.some(h => per.includes(h.id))) {
            await message.channel.messages.fetch({
                limit: args[0]
            }).then(messages => {
                message.channel.bulkDelete(messages);
                const embed5 = new Discord.MessageEmbed()
                    .setAuthor(`${message.author.tag} - ${message.author.id}`, message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor(H4r1ey.config.customConfig.hexID)
                    .setDescription(`**Moderator:** ${message.author.tag} - ${message.author.id}\n**Action:** Purge\n**Channel:** ${message.channel.name} - ${message.channel.id}\n**Amount:** ${args[0]}`)
                    .setThumbnail(message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setFooter("©️ " + H4r1ey.config.customConfig.serverCopyright, H4r1ey.config.customConfig.serverIcon)
                message.channel.send({
                    embeds: [embed5]
                })

                if (H4r1ey.config.optionalSettings.logPurgeCommand) {
                    const channel2 = H4r1ey.channels.cache.get(H4r1ey.config.loggingChannels.clearMessagesLogging);
                    if (!channel2) return console.log(chalk.red(`The channel ID set for the purge command is in-correct. Please re-config!`))
                    const embed46 = new Discord.MessageEmbed()
                        .setDescription(`**Log:**\n\`Purge\`\n**Moderator:**\n\`${message.author.tag} - ${message.author.id}\`\n**Channel**\n\`${message.channel.name} - ${message.channel.id}\`\n**Amount of Messages:**\n\`${args[0]}\``)
                        .setFooter("©️ " + H4r1ey.config.customConfig.serverCopyright, H4r1ey.config.customConfig.serverIcon)
                        .setColor(H4r1ey.config.customConfig.hexID)
                    channel2.send({
                        embeds: [embed46]
                    })
                } 
            })
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